import React from 'react';
import styles from './Servicos.module.css';
import { AiOutlineLaptop, AiOutlineCode, AiOutlineMobile, AiOutlineCheck } from 'react-icons/ai'; 

const Servicos = () => {
  return (
    <section id="servicos" className={styles.servicos}>
      <h2>Meus Serviços</h2>
      <div className={styles.servicosContainer}>
        
        <article className={styles.servico}>
          <div className={styles.serviceHead}>
            <AiOutlineLaptop className={styles.servicoIcon} />
            <h3>Desenvolvimento Web</h3>
          </div>
          <p>Transformo suas ideias em soluções digitais criativas e robustas. Especializado em HTML | CSS | JavaScript | ReactJs | Node.js | Python, com expertise em MySQL | PostgreSQL | MongoDB.</p>
          <ul className={styles.listas}>
            <li><AiOutlineCheck className={styles.checkIcon} />Websites Institucionais</li>
            <li><AiOutlineCheck className={styles.checkIcon} />E-commerce</li>
            <li><AiOutlineCheck className={styles.checkIcon} />Blogs e Portfólios</li>
            <li><AiOutlineCheck className={styles.checkIcon} />Landing Pages</li>
            <li><AiOutlineCheck className={styles.checkIcon} />Aplicativos Web personalizados</li>
          </ul>
        </article>

        <article className={styles.servico}>
          <div className={styles.serviceHead}>
            <AiOutlineCode className={styles.servicoIcon} />
            <h3>Desenvolvimento de Software</h3>
          </div>
          <p>
            Transformo suas necessidades em soluções digitais eficientes e seguras. Especializado no desenvolvimento de software com Python e JavaScript para backend, utilizando frameworks como Express.js, Django e Flask.
          </p>
          <ul className={styles.listas}>
            <li><AiOutlineCheck className={styles.checkIcon} />Software Desktop Personalizado</li>
            <li><AiOutlineCheck className={styles.checkIcon} />Automação de Processos</li>
            <li><AiOutlineCheck className={styles.checkIcon} />Desenvolvimento e Integração de APIs</li>
          </ul>
        </article>

        <article className={styles.servico}>
          <div className={styles.serviceHead}>
            <AiOutlineMobile className={styles.servicoIcon} />
            <h3>Desenvolvimento Mobile</h3>
          </div>
          <p>
            Aprendizado em andamento...
          </p>
        </article>
      </div>
    </section>
  );
};

export default Servicos;