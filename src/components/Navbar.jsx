import React from 'react';
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        Seu Nome
      </div>
      <div className={styles.navbarLinks}>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;