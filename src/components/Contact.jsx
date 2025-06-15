import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    setStatus('Enviando...'); 

    try {
      const response = await fetch('https://portifoliobackend-i5s0.onrender.com', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        const errorData = await response.json();
        setStatus(`Erro ao enviar: ${errorData.message || 'Tente novamente.'}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setStatus('Erro de conexão. Verifique sua internet ou tente novamente mais tarde.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Entre em Contato</h2>
      <div className={styles.contactWrapper}>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Seu Nome" 
              required 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Seu Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <textarea 
              placeholder="Sua Mensagem" 
              required 
              value={mensagem} 
              onChange={(e) => setMensagem(e.target.value)} 
            ></textarea>
            <button type="submit">Enviar Mensagem</button>
            {status && (
              <p style={{color: 'black'}} className={status.includes('sucesso') ? styles.successMessage : styles.errorMessage}>
                {status}
              </p>
            )}
          </form>
        </div>

        <div className={styles.contactOptions}>
          <div className={styles.contactOption}>
            <i className="uil uil-envelope-alt"></i> 
            <h4>Email</h4>
            <h5>Iagoaroucaferreira@hotmail.com</h5>
            <a href="mailto:iagoaroucaferreira@hotmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Enviar Email</a> 
          </div>
          <div className={styles.contactOption}>
            <i className="uil uil-whatsapp"></i>
            <h4>WhatsApp</h4>
            <h5>(74) 999246690</h5>
            <a href="https://wa.me/5574999246690" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Enviar WhatsApp</a> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;