---
title: How to Use Typicons
author: x 
date: x
template: article.jade
---

Typicons are dead simple to use.

Included in the download, or available on GitHub, are all the bits and peices you need to get set up.

The first step is to include `typicons.css` in your the head of your HTML. Make sure you change the path to point to the file on your server.

```html
<link rel='stylesheet' href='path/to/typicons.css' />
```

The CSS file uses the `@font-face` rule to point to several font files, providing a solution for as many browsers as possible.

```css
@font-face {
  font-family: 'typicons';
  src: url("path/to/typicons.eot");
  src: url("path/to/typicons.eot?#iefix") format('embedded-opentype'),
       url("path/to/typicons.woff") format('woff'),
       url("path/to/typicons.ttf") format('truetype'),
       url("path/to/typicons.svg#typicons") format('svg');
  font-weight: normal;
  font-style: normal;
}
```

Again, ensure that the path to the files matches the setup on your server.
Typicons uses ??? bulletproof CSS for included fonts on your website.

Now your ready to include any icons you want on your site.
Just add a `span` or `i` tag with the appropriate class name.

```html
<span class="typcn typcn-arrow-left"><span>
```

That's it! Remember to include both the `typcn` and `typcn-class-name` classes.
I prefer this over the `[class^="typcn-"], [class*=" typcn-"]` method simply because the selector performs better on low performance devices.