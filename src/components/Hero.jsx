import React from 'react';
import styles from './Hero.module.css'; 
import pedraImage from '../../public/img/pedracerta1.png';
import marioImage from '../../public/img/mario.gif'; 
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; 

const Hero = () => {
  const linkedinUrl = "https://www.linkedin.com/in/iago-arouca-b0b5381ab/"; 
  const instagramUrl = "https://www.instagram.com/aroucaiago/";
  const githubUrl = "https://github.com/IagoArouca";
  return (
    <section className={styles.hero}>
      <div className={styles.animationViewport}>
        <div className={styles.heroContent}>
          <img src={pedraImage} className={styles.pedra} alt="pedra" />
        </div>
        <img src={marioImage} alt="MarioBross" className={styles.mario} />
      </div>
      <div className={styles.heroText}>
        <h1>Bem-vindo ao Meu Portfólio!</h1>
        <p>Desça ao subsolo e explore-o enquanto o MarioBross tenta impedir a pedra gigante.</p>
      </div>
      <div className={styles.boxsociais}> 
        <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Meu perfil do LinkedIn" 
        style={{ color: '#0077B5', fontSize: '3em' }} 
        >
        <FaLinkedin /> 
        </a>
        <a 
        href={instagramUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Meu perfil do Instagram"
        style={{ color: '#E4405F', fontSize: '3em' }} 
        className={styles.instagramIconLink} 
        >
        <FaInstagram /> 
        </a>
        <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Meu perfil do GitHub"
        style={{ color: '#333', fontSize: '3em' }} 
        className={styles.githubIconLink} 
        >
        <FaGithub /> 
        </a>
      </div>
    </section>
  );
};

export default Hero;