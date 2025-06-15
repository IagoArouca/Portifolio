import React from 'react';
import styles from './Sobre.module.css';


const Sobre = () => {
  return (
    <section id="about" className={styles.sobre}>
      <h2>Sobre Mim</h2>
      <div className={styles.sobreContainer}>
        <div className={styles.sobreImagem}>
          
        </div>
        <div className={styles.sobreTexto}>
          <h3>Um pouco sobre minha jornada...</h3>
          <p>
            Trabalhei 5 anos em Cartório - sendo mais preciso no setor de Imóveis e cursei Direito na faculdade, porém após me pegar questionando variás vezes sobre com o que realmente queria trabalhar na vida, meus pensamentos sempre se voltavam a área de tecnologia que desde novo sempre foi minha verdadeira paixão, hoje me encontro em transição de carreira, tentando minha primeira vaga como Desenvolvedor Full Stack Junior.
          </p>
          <a href="#contact" className={styles.btn}>Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;