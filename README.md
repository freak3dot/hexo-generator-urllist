# hexo-generator-urllist

Generate urllist.txt sitemap.

urllist.txt is an old type of sitemap once used by Yahoo. It's simply a text file with URL lists of all your Website Pages in plain text one per line.

I realize that it's not needed if you have a sitemap.xml file. However, I prefer to serve a small text file rather than a 404 page. This is especially true if your 404 page is a custom page with heavier html, css, and JavaScript.

## Install

``` bash
$ npm install hexo-generator-urllist --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
sitemap:
    category: false
    tag: false
```

- **category** - Boolean to include categories in the urllist sitemap. This was deliberatley set the same as config for hexo-generator-seo-friendly-sitemap. (Default: true)
- **tag** - Boolean to include tags in the urllist sitemap. This was deliberatley set the same as config for hexo-generator-seo-friendly-sitemap. (Default: true)

## Excluding Posts

Add `sitemap: false` to the post's front matter.

## Known Issues

If you are using this with hexo-asset-pipeline, you probably need to exclude `urllist.txt`.

```yaml
asset_pipeline:
  revisioning:
    enable: true
    exclude: ['urllist.txt']
```
