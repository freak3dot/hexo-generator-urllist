/* global hexo */
'use strict';

const pathFn = require('path');

const config = hexo.config.sitemap;

hexo.extend.generator.register('urllist', require('./lib/generator'));