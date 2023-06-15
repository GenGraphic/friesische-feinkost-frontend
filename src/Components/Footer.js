
import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 


import styles from '../css/footer.module.css';

const Footer = () => {
    const [locations, setLocations] = useState([]);

    //call function that fetch data from db
    useEffect(() => {
        fetchData();
    }, [])


    //before deliver prod change the fetch source
    //fetch data from db
    const fetchData = () => {
        fetch('http://friesische-feinkost.de/api/get_data.php')
            .then(response => response.json())
            .then(data => {
                setLocations(data);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }

    return (
    <Container className={[styles.footerBody, "mt-5 p-0 p-xl-5 pb-xl-0 pb-0"]}> 
        <Row className='m-0'>
            <Col className='col-12 col-lg-6 col-xl-4 p-0 d-flex flex-column justify-content-around h-100'>
                <span className='subtitleB'>Wochenmarkt</span>
                {locations.map((items) => {
                    return (
                    <Row key={items.id} className='m-0'>
                        <Col>
                            <p>{items.name}</p>
                        </Col>
                        <Col>
                            <p>{items.day}</p>
                        </Col>
                        <Col>
                            <p>{items.timeStart}-{items.timeEnd}</p>
                        </Col>
                    </Row >
                    )
                })}
            </Col>

            <Col className='col-12 p-0 col-lg-6 col-xl-4 text-center'>
                <span className='subtitleB'>Websitekarte</span>
                <div className='d-flex flex-column'>
                    <a className='mb-2 links' href='/'>Home</a>
                    <a className='mb-2 links' href='/#/About'>Über uns</a>
                    <a className='mb-2 links' href='/#/Contact'>Kontakt</a>
                    <a className='mb-2 links' href='/#/Speisekarte'>Unser Sortiment</a>
                    <a className='mb-2 links' href='/#/Wochenmarkten'>Wochenmärkten</a>
                    <a className='mb-2 links' href='/#/About'>AGB</a>
                </div>
            </Col>

            <Col className='col-12 p-0 col-xl-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={require('../images/logo.png')} alt='Friesische Feinkost Logo' width={300}/>
            </Col>
        </Row>
        <Row className={[styles.copyText, 'text-center text-white m-0']}>
            <p className='m-0'>&copy; Copyright 2023 Friesische Feinkost</p>
        </Row>
    </Container>
  )
}

export default Footer
