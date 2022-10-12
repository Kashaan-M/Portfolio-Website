import React from 'react';
import { projects } from '../data';

// const projectImgs = {
//   1: require('../assets/color-generator-app-kashaan-mahmood.png'),
//   2: require('../assets/markdown-previewer-app.png'),
//   3: require('../assets/random-quotes-machine.png'),
//   4: require('../assets/unit-conversion-webapp.png'),
//   5: require('../assets/survey-form.png'),
//   6: require('../assets/technical-documentation-page.png'),
//   7: require('../assets/product-landing-page.png'),
//   8: require('../assets/personal-portfolio-website-old.png'),
// };

export default function Projects() {
  return (
    <>
      <section id="projects">
        <article className="projects-wrapper">
          <h2 className="projects-text">Projects I've built</h2>
          <div className="projects-container">
            {projects.map((project) => {
              const { id, text, url, img } = project;
              return (
                <div className="card" key={id}>
                  <a href={url}>
                    <img src={img} alt={text} className="card-img" />
                    <h4 className="card-text">{text}</h4>
                  </a>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
