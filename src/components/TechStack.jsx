import React from 'react';
import { techStack } from '../data';
import html from '../assets/html.svg';
import css from '../assets/css3-original.svg';
import sass from '../assets/sass-original.svg';
import js from '../assets/javascript-original.svg';
import react from '../assets/react-original.svg';
import node from '../assets/nodejs-original.svg';
import npm from '../assets/npm-original-wordmark.svg';
import express from '../assets/express_js.svg';
import pug from '../assets/pugpugjs.svg';
import mongodb from '../assets/mongo_db.svg';
import mongoose from '../assets/mongoose.svg';
import webpack from '../assets/webpack-original.svg';
import git from '../assets/git-original.svg';
import github from '../assets/github.svg';
import eslint from '../assets/eslint.svg';
import vscode from '../assets/vscode-original.svg';
import bs5 from '../assets/bootstrap-original.svg';
import jq from '../assets/jquery.svg';
import linux from '../assets/linux-plain.svg';
import bash from '../assets/bash-original.svg';
import vim from '../assets/vim-plain.svg';
import python from '../assets/python-original.svg';

const stack = [
  html,
  css,
  sass,
  js,
  react,
  node,
  npm,
  express,
  pug,
  mongodb,
  mongoose,
  webpack,
  git,
  github,
  eslint,
  vscode,
  bs5,
  jq,
  linux,
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
                  <img src={stack[id]} alt={text} className='card-img' width={200} height={200} />
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
