import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';
import instagram from '../../public/instagram.png';
import facebook from '../../public/facebook.png';
import whatsapp from '../../public/whatsapp.png'
import Image from 'next/image'

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pgwk1jf', 'template_281a87g', form.current, '0oZEsDpHc0Dn5ZAYE')
      .then((result) => {
          console.log('Mensagem enviada');
      }, (error) => {
          console.log('Erro ao enviar mensagem');
      });
      e.target.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.center} id="localization">
        <h4 id="contact">Entre em contato</h4>
        <h2>Vamos tomar um café?</h2>
        <div className={styles.maps}>
          <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Boa%20Vista%20Centro&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <label >Nome</label>
            <input type="text" name="user_name" />
            <label>Telefone</label>
            <input type="tel" name="user_phone" />
            <label>Mensagem</label>
            <textarea name="message" rows="8" wrap='hard' maxLength="800"/> 
            <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
