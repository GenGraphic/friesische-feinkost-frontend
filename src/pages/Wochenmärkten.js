import React, {useState, useEffect} from 'react';

import Footer from '../Components/Footer';
import Post from '../Components/Post';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../css/weekmarket.module.css';


const Wochenmarkten = () => {
  const [locations, setLocations] = useState([]);
  const [posts, setPosts] = useState([]);

  const [selected, setSelected] = useState();


  //call function that fetch data from db
  useEffect(() => {
    fetchData();
    fetchPosts();
  }, []);

  //fetch locations from db
  const fetchData = () => {
    fetch('http://friesische-feinkost.de/api/get_data.php')
      .then(response => response.json())
      .then(data => {
        setLocations(data);
        setSelected(data[0]);//asign the fisrt value of the list to selected
      })
      .catch(error => {
        console.log('Error on fetch locations:', error);
      })
  }

  //fetch posts from db
  const fetchPosts = () => {
    fetch('http://friesische-feinkost.de/api/posts/get_posts.php')
        .then(response => response.json())
        .then(posts => {
            setPosts(posts);
        })
        .catch(error => {
            console.log('Error on fetch posts:', error);
        });
};

  return (
    <>
    <Container  className={[styles.mainBody, 'mt-5 p-3 pt-0']}>
      <Row>
        {locations.map((items) => {
            return (
              <Col key={items.id} className={styles.tab}>
                <p className='m-0' 
                  onClick={() => setSelected(items)}
                >{items.name}</p>
              </Col>
            )
        })}
      </Row>

      <Row>
        <Col className='col-12 col-lg-4'>
          <span className='subtitleB'>Informationen</span>
          {selected &&
            <div key={selected.id}>
              {selected.info &&
                <p className={styles.importantTxt}>{selected.info}</p>
              }
              <p>
                Besuchen Sie uns jeden Montag auf dem Biomarkt in <b>{selected.name}</b> zwischen <b>{selected.timeStart}</b> und <b>{selected.timeEnd}</b> Uhr. Dort können Sie unsere vielfältige Auswahl an frischen und hochwertigen Produkten entdecken. Wir sind stolz darauf, unseren Kunden nur die besten Käsesorten, Fleisch- und Backwaren anzubieten, die sorgfältig von uns ausgewählt wurden. Wir freuen uns darauf, Sie persönlich kennenzulernen und Sie von der Qualität unserer Produkte zu überzeugen. Kommen Sie vorbei und erleben Sie den Geschmack von Friesische Feinkost!
              </p>
            </div>
          }
        </Col>
        <Col className='col-12 col-lg-8'>
          <span className='subtitleB'>News</span>
          {posts.map((post) => {
            return(
              <Post
                key={post.id}
                id={post.id} 
                title={post.title}
                text={post.text}
                image={post.image}
                likes={post.likes}
              />
            )
          })
          }
        </Col>
      </Row>
    </Container>

    <Footer />
    </>
  )
}

export default Wochenmarkten;
