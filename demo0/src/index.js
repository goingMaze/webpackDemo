import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { sum } from './util';
/**
 * normal
 */
// document.body.innerHTML = `<h1>我就想看看webpack怎么零配置</h1>`;

console.log('sum:', sum(1, 2));
console.log('我就想看看webpack怎么零配置');
/**
 * react
 */

render(React.createElement(App), document.getElementById('app'));