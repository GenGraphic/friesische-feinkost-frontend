import React, {useEffect, useState, lazy} from 'react';

import Footer from '../Components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../css/home.module.css';

import Video from '../images/homeVideo.mp4';


export default function Home() {
  const [textListe, setTextListe] = useState([]);
  const [images, setImages] = useState([]);
  const baseUrl = "https://friesische-feinkost.de/api/FrontEnd_Images/";
  const LazyImage = lazy(() => import('../Components/LazyImage'));


  useEffect(() => {
    fetchTexte();
    fetchImages();
  }, [])

  //Fetch teh texts from the data base when the page loads
  const fetchTexte =  () => {
    fetch('https://friesische-feinkost.de/api/fetch_texte.php')
      .then(result => result.json())
      .then(data => {
        setTextListe(data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const fetchImages = () => {
    fetch('https://friesische-feinkost.de/api/fetch_images_home.php')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
      <Container className={[styles.heroSection, 'mt-0 mt-md-5  p-3']}>
        <Row>
          <Col className='col-12 col-xl-6'>
            <div dangerouslySetInnerHTML={{__html: `
                <video autoplay loop muted playsinline class='video'>
                  <source src=${Video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>`,
              }}
            />     
          </Col>
          <Col className='col-12 col-xl-6 d-flex flex-column justify-content-center'>
            <p className='titleR m-0'>Friesische Feinkost</p>
            <p className='.subtitleR text-center display-6'>Aus Liebe zum Genuß</p>
          </Col> 
        </Row>

        <Row className='mt-5'>
          <Col className='col-12 col-md-4 text-center'>
          <img loading='lazy' src={baseUrl + images.find(elm => elm.location === '1')?.imageName} className={styles.galeryImg} alt='Galery Friesische Feinkost' />
          </Col>
          <Col className='col-12 col-md-4 mt-3 mt-md-0 text-center d-flex flex-column justify-content-between align-items-center'>
            <img loading='lazy' src={baseUrl + images.find(elm => elm.location === '2')?.imageName} className={styles.galeryImg} alt='Galery Friesische Feinkost'/>
            <img loading='lazy' src={baseUrl + images.find(elm => elm.location === '3')?.imageName} className={styles.galeryImg} alt='Galery Friesische Feinkost'/>
          </Col>
          <Col className='col-12 col-md-4 mt-3 mt-md-0 text-center'>
          <img loading='lazy' src={baseUrl + images.find(elm => elm.location === '4')?.imageName} className={styles.galeryImg} alt='Galery Friesische Feinkost'/>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col className='col-12 col-lg-6 d-flex flex-column align-items-center'>
              <p className='text-center text-md-start pararaphB' style={{whiteSpace: 'pre-wrap'}}>
                {textListe.length > 0 ? textListe[0].text : 'Loading...'}
              </p>
            <img loading='lazy' src={baseUrl + images.find(elm => elm.location === '5')?.imageName} alt='Team Friesische Feinkost' className={styles.teamImg}/>
          </Col>
          <Col className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-between'>
            <div className='text-center text-md-start'>
              <span style={{whiteSpace: 'pre-wrap'}} className='subtitleR'>{textListe.length > 0 ? textListe[1].title : "Loading..."}</span>
              <p style={{whiteSpace: 'pre-wrap'}}>
                {textListe.length > 0 ? textListe[1].text : "Loading..."}
              </p>
            </div>
            <div className='text-center text-md-start'>
              <span style={{whiteSpace: 'pre-wrap'}} className='subtitleR'>{textListe.length > 0 ? textListe[2].title : "Loading..."}</span>
              <p style={{whiteSpace: 'pre-wrap'}}>
                {textListe.length > 0 ? textListe[2].text : 'Loading...'}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
