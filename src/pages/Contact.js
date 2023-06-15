import React, {useState} from 'react';

import Footer from '../Components/Footer';

import Container from 'react-bootstrap/Container';

import styles from '../css/contact.module.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        nachname: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const params = new URLSearchParams(formData);
    
        fetch('http://friesische-feinkost.de/api/send_email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(formData),
        })
          .then(response => response.json())
          .then( 
            alert("Vielen Dank! Wir haben Ihre E-Mail erhalten und werden uns so schnell wie möglich bei Ihnen melden.")  
          )
          .catch(error => {
            alert("Etwas ist schiefgegangen, aber Sie können uns immer noch eine E-Mail senden an: info@friesische-feinkost.de")
          });
      };

    
  return (
    <>
    <Container className={[styles.main, 'mt-0 mt-md-5  p-3']}>
        <span className='subtitleB'>Kontaktformular</span>
        <form className='mt-3'>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" name='name' value={formData.name} onChange={handleInputChange}/>
                    <label className="form-label">Vorname*</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" name='nachname' value={formData.nachname} onChange={handleInputChange}/>
                    <label className="form-label">Nachname</label>
                </div>
                </div>
            </div>

            
            <div className="form-outline mb-4">
                <input type="text" id="form6Example3" className="form-control"/>
                <label className="form-label">Company name</label>
            </div>

            
            <div className="form-outline mb-4">
                <input type="email" id="form6Example5" className="form-control" name='email' value={formData.email} onChange={handleInputChange}/>
                <label className="form-label">Email*</label>
            </div>

            
            <div className="form-outline mb-4">
                <input type="text" id="form6Example6" className="form-control" name='subject' value={formData.subject} onChange={handleInputChange}/>
                <label className="form-label">Subject*</label>
            </div>

            
            <div className="form-outline mb-4">
                <textarea className="form-control" id="form6Example7" rows="4" name='message' value={formData.message} onChange={handleInputChange}></textarea>
                <label className="form-label">Inhalt*</label>
            </div>
            
            <button type="button" value="Submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Send Message</button>
        </form>
    </Container>

    <Footer />
    </>
  )
}

export default Contact;
