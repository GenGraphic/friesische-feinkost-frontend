import React, {useState, useEffect} from 'react';

import Footer from '../Components/Footer';

import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../css/about.module.css';

const About = () => {
  const [infoContent, setInfoContent] = useState('about');
  const [texte, setTexte] = useState([]);
  const [images, setImages] = useState([]);
  const baseUrl = "https://friesische-feinkost.de/api/FrontEnd_Images/";

    useEffect(() => {
        fetchText();
        fetchImages();
    }, [])

    const fetchText = () => {
        fetch('https://friesische-feinkost.de/api/fetch_texte.php')
            .then(result => result.json())
            .then(data => {
                setTexte(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const fetchImages = () => {
      fetch("https://friesische-feinkost.de/api/fetch_images.php")
        .then(resposne => resposne.json())
        .then(data => {
          setImages(data);
        })
        .catch(error => {
          console.log(error);
        })
    }

    console.log(images);

  return (
    <div>        
        <Container className={[styles.mainBody,'mt-0 mt-md-5']}>
          <Row className='h-100 p-2'>
            <Col className={[styles.menu,'col-12 col-lg-3 p-0']}>
              <div className='text-center text-lg-start'>
                <span className='subtitleB'>Informationen</span>
                <ul>
                  <li className='links' onClick={() => setInfoContent('about')}>Über uns</li>
                  <li className='links' onClick={() => setInfoContent('galery')}>Bilder</li>
                  <li className='links' onClick={() => setInfoContent('rights')}>Widerrufsrecht</li>
                  <li className='links' onClick={() => setInfoContent('impressum')}>Impressum</li>
                  <li className='links' onClick={() => setInfoContent('agb')}>AGB</li>
                </ul>
              </div>
              
            </Col>
            <Col className='col-12 col-lg-9 d-flex p-5 pt-2 flex-column justify-content-between'>
              {infoContent === 'about' &&
                <div>
                  <span className='subtitleB' style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[3].title}</span>
                  <p className='text-center text-md-start' style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[3].text}</p>
                </div>
              }
              {infoContent === "rights" &&
                <div>
                  <span className='subtitleB' style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[4].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[4].text}</p>

                  <span className='SsubtitleB' style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[5].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[5].text}</p>
                </div>
              }
              {infoContent === 'agb' &&
                <div>
                  <span className='subtitleB'>Allgemeine Geschäftsbedingungen</span>
                  <p className='SsubtitleB'>{texte.length > 0 && texte[12].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[12].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}} className='SsubtitleB'>{texte.length > 0 && texte[13].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[13].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}} className='SsubtitleB'>{texte.length > 0 && texte[14].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[14].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}}  className='SsubtitleB'>{texte.length > 0 && texte[15].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[15].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}}  className='SsubtitleB'>{texte.length > 0 && texte[16].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[16].text}</p>
            
                  <p style={{whiteSpace: 'pre-wrap'}}  className='SsubtitleB'>{texte.length > 0 && texte[17].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[17].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}}  className='SsubtitleB'>{texte.length > 0 && texte[18].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[18].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}}  className='SsubtitleB'>{texte.length > 0 && texte[19].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[19].text}</p>

                  <p style={{whiteSpace: 'pre-wrap'}}  className='SsubtitleB'>{texte.length > 0 && texte[20].title}</p>
                  <p style={{whiteSpace: 'pre-wrap'}} >{texte.length > 0 && texte[20].text}</p>
                  
                </div>
              }
              {infoContent === "galery" &&
                <div>
                  <span className='subtitleB'>Bilder von uns</span>
                  <Row className='mt-4'>
                    {images.map((item) => {
                      return (
                        <Col className='col-12 col-md-4 mt-4'>
                          <img loading='lazy' className={styles.galeryImg} src={baseUrl + item.imageName} alt='Friesische Feinkost Galery'/>
                        </Col>
                      )
                    })
                    }
                  </Row>
                </div>
              }
              {infoContent === "impressum" &&
                <div>
                  <span className='subtitleB' style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[6].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[6].text}</p>

                  <span style={{whiteSpace: 'pre-wrap'}} className='subtitleB'>{texte.length > 0 && texte[7].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[7].text}</p>

                  <span className='subtitleB'>{texte.length > 0 && texte[8].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[8].text}</p>

              
                  <span style={{whiteSpace: 'pre-wrap'}} className='subtitleB'>{texte.length > 0 && texte[9].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[9].text}</p>

                  <span style={{whiteSpace: 'pre-wrap'}} className='subtitleB'>{texte.length > 0 && texte[10].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[10].text}</p>
                  
                  <span style={{whiteSpace: 'pre-wrap'}} className='subtitleB'>{texte.length > 0 && texte[11].title}</span>
                  <p style={{whiteSpace: 'pre-wrap'}}>{texte.length > 0 && texte[11].text}</p>
                </div>
              }
            </Col>
          </Row>
        </Container>

        <Footer />
    </div>
  )
}

export default About
