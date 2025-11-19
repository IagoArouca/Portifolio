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
          <p>E-commerce de produtos digitais, bastante robusta,  com carrinho de compras e  muito mais, confira !.</p>
         
          <div className={styles.projetoLinks}>
            <a href="https://e-commerce-produtos-digitais.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <div className={styles.projetoimg}>
            <img src="/img/Focototal.png" alt="" />
          </div>
          <p>Participei de um Projeto em equipe no programa desenvolve do grupo Boticario, onde o desafio era construir um Módulo de 
            Agendamento e Gestão de Tarefas (MVP) para uma nova plataforma de produtividade, a 
            "Foco Total".</p>
         
          <div className={styles.projetoLinks}>
            <a href="https://foco-total-lake.vercel.app/login" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <div className={styles.projetoimg}>
            <img src="/img/Docker.png" alt="" />
          </div>
          <p>Este projeto demonstra a criação e configuração automatizada de um cluster Docker Swarm utilizando Vagrant e VirtualBox. O cluster é composto por um nó manager e múltiplos nós worker, todos rodando Ubuntu Server 20.04 (Focal Fossa).</p>
         
          <div className={styles.projetoLinks}>
            <a href="https://github.com/IagoArouca/Cluster-Docker-Swarm" target="_blank" rel="noopener noreferrer">GitHub</a>
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
            <a href="https://t0-do-list-dun.vercel.app" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </article>

        <article className={styles.projectCard}>
          <div className={styles.projetoimg}>
            <img src="/img/cifrao.jpg" alt="" />
          </div>
          <p>Gerenciador de Finanças Pessoais completo, focado em ajudar a controlar receitas e despesas de forma intuitiva.!.</p>
         
          <div className={styles.projetoLinks}>
            <a href="https://controle-financeiro-vert-three.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </article>
      </div>            
    </section>
  );
};

export default Projetos;