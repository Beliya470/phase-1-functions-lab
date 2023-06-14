const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js')
);

const src = babelResult.code;

global.expect = expect;
global.document = { body: { innerHTML: html } };
global.window = { document: global.document, src: src };

