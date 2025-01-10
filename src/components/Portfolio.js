import React from "react";
import data from "../data/portfolio.json";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-info">
          <h1>{data.name}</h1>
          <p>{data.role}</p>
        </div>
        <div className="header-contact">
          <a
            href={`mailto:${data.contact[0].email}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href={data.contact[0].github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={data.contact[0].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>{data.about}</p>
        </section>
        <section className="projects">
          <h2>Articles</h2>
          <div className="project-list">
            {data.article.map((article, index) => (
              <div key={index} className="project-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="project-image"
                />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  View Article
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="projects">
          <h2>Project</h2>
          <div className="project-list">
            {data.projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
