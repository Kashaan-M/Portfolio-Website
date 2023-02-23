import React from 'react';
import { techStack } from '../data';
import html from '../assets/html.svg';
import css from '../assets/css3-original.svg';
import sass from '../assets/sass-original.svg';
import js from '../assets/javascript-original.svg';
import react from '../assets/react-original.svg';
import nextjs from '../assets/nextjs-original-wordmark.svg';
import redux from '../assets/redux.svg';
import node from '../assets/nodejs-original.svg';
import express from '../assets/express_js.svg';
import pug from '../assets/pugpugjs.svg';
import mongodb from '../assets/mongo_db.svg';
import mongoose from '../assets/mongoose.svg';
import webpack from '../assets/webpack-original.svg';
import git from '../assets/git-original.svg';
import github from '../assets/github.svg';
import figma from '../assets/figma-original.svg';
import tailwindcss from '../assets/tailwindcss-plain.svg';
import bs5 from '../assets/bootstrap-original.svg';
import bash from '../assets/bash-original.svg';
import vim from '../assets/vim-plain.svg';
import python from '../assets/python-original.svg';

const stack = [
  html,
  css,
  sass,
  js,
  react,
  nextjs,
  redux,
  node,
  express,
  pug,
  mongodb,
  mongoose,
  webpack,
  git,
  github,
  figma,
  tailwindcss,
  bs5,
  bash,
  vim,
  python,
];

export default function Stack() {
  return (
    <>
      <section id='stack' role='region' aria-label='Technology I use'>
        <article className='stack-wrapper'>
          <h2 className='stack-text'>Technology I Use Regularly</h2>
          <div className='stack-container'>
            {techStack.map((tech) => {
              const { id, text } = tech;

              return (
                <div className='card' key={id}>
                  <img
                    src={stack[id]}
                    alt={text}
                    className='card-img'
                    width={200}
                    height={200}
                  />
                  <h4 className='card-text'>{text}</h4>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
