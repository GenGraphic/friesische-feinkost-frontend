import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../css/post.module.css';

const Post = ({title, text, image, likes, id}) => {
    const baseImgUrl = "http://friesische-feinkost.de/api/posts/uploads/";
    const [likesNR, setLikesNr] = useState(likes);

    const handleLike = () => {
        fetch(`http://friesische-feinkost.de/api/posts/add_like.php?id=${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
            // Increment the likes count in the UI
                setLikesNr((prevLikes) => parseInt(prevLikes) + 1);
            } else {
                console.log('Failed to delete location');
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

  return (
    <Container fluid className={[styles.body]}>
        <Row>
            <Col className='col-12 col-lg-4 h-100'>
                <img src={baseImgUrl + image} alt='Post' className={styles.postImg}/>
            </Col>
            <Col className='col-12 col-lg-8'>
                <Row>
                    <Col>
                        <p className='subtitleB'>{title}</p>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <p className={styles.likes}>{likesNR}</p>
                        <img onClick={handleLike} src={require('../images/icons/like.png')} width={20} height={20} alt='Like Icon'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={styles.text}>{text}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Post
