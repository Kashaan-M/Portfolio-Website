import React from 'react';

export const pages = [
  {
    id: 1,
    url: '/',
    text: 'About',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
      </svg>
    ),
  },
  {
    id: 2,
    url: '/certifications',
    text: 'Certificates',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
      </svg>
    ),
  },
  {
    id: 3,
    url: '/projects',
    text: 'Projects',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
      </svg>
    ),
  },
  {
    id: 4,
    url: '/stack',
    text: 'Stack',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
      </svg>
    ),
  },
  {
    id: 5,
    url: '/contact',
    text: 'Contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        />
      </svg>
    ),
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/Kashaan-M',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="23"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <title>GitHub Profile</title>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/kashaan-mahmood-63a496a4/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="23"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <title>LinkedIn Profile</title>
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
      </svg>
    ),
  },
];

export const projects = [
  {
    id: 1,
    text: 'Color Generator App',
    url: 'https://color-generator-app-kashaan.netlify.app/',
    img: require('./assets/color-generator-app-kashaan-mahmood.png'),
  },
  {
    id: 2,
    text: 'Markdown Previewer App',
    url: 'https://markdown-previewer-k.netlify.app/',
    img: require('./assets/markdown-previewer-app.png'),
  },
  {
    id: 3,
    text: 'Random Quotes Machine',
    url: 'https://randomquotesmachine-k.netlify.app',
    img: require('./assets/random-quotes-machine.png'),
  },
  {
    id: 4,
    text: 'Unit Converter App',
    url: 'https://unit-converter-webapp.netlify.app',
    img: require('./assets/unit-conversion-webapp.png'),
  },
  {
    id: 5,
    text: 'Survey Form',
    url: 'https://codepen.io/kashaan-mahmood/pen/PopLBRb',
    img: require('./assets/survey-form.png'),
  },
  {
    id: 6,
    text: 'Technical Documentation Page',
    url: 'https://codepen.io/kashaan-mahmood/pen/eYemrgj',
    img: require('./assets/technical-documentation-page.png'),
  },
  {
    id: 7,
    text: 'Product Landing Page',
    url: 'https://codepen.io/kashaan-mahmood/pen/mdBGmjZ',
    img: require('./assets/product-landing-page.png'),
  },
  {
    id: 8,
    text: 'Portfolio Website (old)',
    url: 'https://kashaan-m.netlify.app',
    img: require('./assets/personal-portfolio-website-old.png'),
  },
];

export const techStack = [
  {
    id: 0,
    text: 'HTML 5',
  },
  {
    id: 1,
    text: 'CSS 3',
  },
  {
    id: 2,
    text: 'SCSS',
  },
  {
    id: 3,
    text: 'JavaScript + ES6',
  },
  {
    id: 4,
    text: 'React JS 18',
  },
  {
    id: 5,
    text: 'NPM',
  },
  {
    id: 6,
    text: 'Webpack',
  },
  {
    id: 7,
    text: 'Git',
  },
  {
    id: 8,
    text: 'GitHub',
  },
  {
    id: 9,
    text: 'Visual Studio Code',
  },
  {
    id: 10,
    text: 'BootStrap 5',
  },
  {
    id: 11,
    text: 'Node JS',
  },
  {
    id: 12,
    text: 'jQuery',
  },
  {
    id: 13,
    text: 'Linux',
  },
  {
    id: 14,
    text: 'Terminal',
  },
  {
    id: 15,
    text: 'NeoVim',
  },
  {
    id: 16,
    text: 'Python 3',
  },
];

export const contact = [
  {
    id: 0,
    text: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/kashaan-mahmood-63a496a4/',
  },
  {
    id: 1,
    text: 'GitHub Profile',
    url: 'https://github.com/Kashaan-M',
  },
  {
    id: 2,
    text: 'kashaanmahmood@gmail.com',
    url: '#',
  },
  {
    id: 3,
    text: '+92344 0507057',
    url: '#',
  },
];
