'use strict';

const minimatch = require('minimatch');

module.exports = function(locals) {
  const config = this.config;
  let skipRenderList = [
    '**/*.js',
    '**/*.css'
  ];

  if (Array.isArray(config.sitemap.skip_render)) {
    skipRenderList = skipRenderList.concat(config.skip_render);
  } else if (config.skip_render != null) {
    skipRenderList.push(config.skip_render);
  }

  const urls = [].concat(locals.posts.toArray(), locals.pages.toArray())
    .filter(function(post) {
      return post.sitemap !== false && !isMatch(post.source, skipRenderList);
    });

    if (config.sitemap && config.sitemap.tag !== false && locals.tags.length > 0) {
      locals.tags.toArray().forEach(function(tag){
          urls.push(tag);
      });
    }

    if (config.sitemap && config.sitemap.category !== false && locals.categories.length > 0) {
        locals.categories.toArray().forEach(function(category){
          urls.push(category);
      });
    }

  const urllist = urls
    .map(function(post) {
        return config.url + '/' + post.path.replace('index.html', '');
    })
    .sort();

  // Add index
  urllist.unshift(config.url + '/');

  return {
    path: 'urllist.txt',
    data: urllist.join('\n'),
  };
};

function isMatch(path, patterns) {
  if (!patterns) return false;
  if (!Array.isArray(patterns)) patterns = [patterns];
  if (!patterns.length) return false;

  for (let i = 0, len = patterns.length; i < len; i++) {
    if (minimatch(path, patterns[i])) return true;
  }

  return false;
}
