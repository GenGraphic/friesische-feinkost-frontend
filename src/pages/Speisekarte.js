import React, {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';

import Footer from '../Components/Footer';

import styles from '../css/speisekarte.module.css';

const Speisekarte = () => {
    const [favoriteProdukte, setFavoriteProdukte] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    const [categoryList, setCategoryList] = useState(["All"]);
    const baseImgUrl = "https://friesische-feinkost.de/api/produkte/images/";
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");


    useEffect(() => {
        fetchFavProdukte();
        getAllProducts();
    }, [])

    useEffect(() =>{
        composeCategoryList();
    }, [allProducts])


    //fetch favorite items from table produkte and save them in favoriteProdukte array
    const fetchFavProdukte = () => {
        fetch('https://friesische-feinkost.de/api/produkte/fetch_fav_items.php')
            .then(result => result.json())
            .then(data => {
                setFavoriteProdukte(data);
            })
            .catch(error => {
                console.log(error);
            })
    };

    //fetch all the items in table produkte
    const getAllProducts = async () => {
        try {
            const response = await fetch('https://friesische-feinkost.de/api/produkte/fetch_items.php');
            const data = await response.json();

            //Add the data into the products array
            setAllProducts(data);
            setSortedList(data);

            // Extract unique categories from the fetched data
            const uniqueCategories = [...new Set(data.map(item => item.category))];

            setCategoryList(prevCategories => [...prevCategories, ...uniqueCategories.filter(category => !prevCategories.includes(category))]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    //this map the items list and get the category name and push it in to the cagegory list if not exists
    const composeCategoryList = () => {
        allProducts.forEach(element => {
            if(!categoryList.includes(element.category)){
                categoryList.push(element.category)
            }
        });
        setIsLoading(false);
    }
    
    const sortAfterCategory = (category) => {
        const newSortedList = [];

        allProducts.forEach(elm => {
            if(elm.category === category) {
                newSortedList.push(elm)
            }
        })

        if(category === 'All') {
            setSortedList(allProducts);
        } else {
            setSortedList(newSortedList);
        }
    }
 
  return (
    <>
    <Container className={styles.body}>
        <h3>LIEBLINGS:</h3>
        <Row className='gap-5 px-2'>
            {favoriteProdukte.map((item) => {
                return(
                    <Col key={item.id} className={[styles.favCard, "col-12 col-lg"]}>
                        <img src={baseImgUrl + item.image} className={styles.favImg} alt='Spesekarte'/>
                        <div className="px-2">
                            <h6 className={styles.favtitle}>{item.title}</h6>
                            <p className={styles.favParagraph}>
                                {item.description}
                            </p>
                        </div>
                        {item.price !== "0" && 
                            <div className={styles.favPriceCont}>
                                <p className='m-0'>
                                    <strong>{item.price}€</strong>/{item.menge}
                                </p>
                            </div>
                        }
                        
                    </Col>
                )
            })
            }
        </Row>

        <h3 className='mt-5'>KATEGORIEN:</h3>
        <Row className='overflow-scroll'>
            {isLoading ? (
                <p>Loading...</p>
                ) : (
                <div className='d-flex'>
                    {categoryList.map((item) => {
                        return (
                            <div 
                            key={item}
                            onClick={() => sortAfterCategory(item)} 
                            className={selectedCategory === item ? styles.categorySelected : styles.categoryCont}>
                                <p className='m-0 text-nowrap'>{item}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </Row>
        <Row className='gap-3 px-2'>
            {sortedList.map((item) => {
                return(
                    <Col key={item.id} className={`${styles.cardItem} col-12 col-lg`}>
                        <img className={styles.cardImg} src={baseImgUrl + item.image} alt='Produkt Image'/>
                        <h6>{item.title}</h6>
                        <p className={`${styles.favParagraph} text-center`}>{item.description}</p>
                        {item.price !== "0" && 
                            <p className='m-0 align-self-end'><strong>{item.price}€</strong>/{item.menge}</p>
                        }
                    </Col>
                )
            })

            }
        </Row>
    </Container>

    <Footer />
   </>
  )
}

export default Speisekarte;
