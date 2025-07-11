import React from 'react';
import styles from './Projects.module.css';

const Projetos = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Meus Projetos</h2>
      <div className={styles.projectsGrid}>

        <article className={styles.projectCard}>
          <div className={styles.projetoimg}>
            <img src="/img/logo-wear.png" alt="" />
          </div>
          <p>E-commerce de produtos digitais, com funcionalidades robustas,Carrinho de Compras,Autenticação de Usuário e muito mais, confira !.</p>
         
          <div className={styles.projetoLinks}>
            <a href="https://e-commerce-produtos-digitais.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <div className={styles.projetoimg}>
            <img src="/img/imagemprojeto1.jpeg" alt="" />
          </div>
          <p>Este é um sistema completo de login, cadastro e painel de usuário protegido com autenticação JWT,.</p>
         
          <div className={styles.projetoLinks}>
            <a href="https://github.com/IagoArouca/ProjetoLogin.git" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <div className={styles.projetoimg}>
            <img src="/img/imagemprojeto2.jpeg" alt="" />
          </div>
          <p>Um aplicativo de gerenciamento de tarefas, construído com foco em organização visual e usabilidade..</p>
          <div className={styles.projetoLinks}>
            <a href="https://github.com/IagoArouca/T0-do-List.git" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>
      </div>            
    </section>
  );
};

export default Projetos;