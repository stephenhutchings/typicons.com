---
title: How to Use Typicons
sub: Typicons are dead simple to use.
author: x
date: x
template: article.jade
---

### Install with bower

The easiest way to install Typicons is with bower. This will give you the minified CSS, the combined font files (SVG, WOFF, TTF, EOT) and a demo page showing how to include the font.

```
bower install typicons
```

### Download/Github

You can also find all the bits and pieces you need to get set up in the download or available on [GitHub](https://github.com/stephenhutchings/typicons.font).

### Setting up

The first step is to include `typicons.min.css` in your the head of your HTML. Make sure you change the path to point to the file on your server.

```html
<link rel='stylesheet' href='path/to/typicons.min.css' />
```

The CSS file uses the `@font-face` rule to point to several font files, providing a the best possible cross-bwroser solution.

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
Typicons uses Fontspring's [bulletproof @font-face](http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax) CSS for including fonts on your website.

Now your ready to include any icons you want on your site.
Just add a `span` or `i` tag with the appropriate class name.

```html
<span class="typcn typcn-arrow-left"></span>
```

That's it! Remember to include both the `typcn` and `typcn-class-name` classes.
I prefer this over the `[class^="typcn-"], [class*=" typcn-"]` method simply because the selector performs better on low performance devices.

There is one caveat, though. Typicons is very large, weighing in at about 80kb (unzipped). I therefore strongly suggest reading the 'Making Typicons' article or checking out the [resources](/more/resources/) in order to make a custom build of Typicons.
