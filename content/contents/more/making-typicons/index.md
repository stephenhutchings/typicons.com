---
title: Making Typicons
author: x 
date: x
template: article.jade
---

Typicons is the result of many stolen hours and late nights to create a high quality icon font that would be free for everyone to use. I hope this write-up can be useful for anyone undertaking a similar challenge.

### The original artwork
The original vectors were created in Adobe Illustrator. Using pixel preview and its incredibly useful pixel snapping, it was a easy to ensure that each the icons would remain sharp and sit within solid pixels wherever possible.

Almost all the curves in Typicons are perfect curves, and producing beautiful tangents to these curves would have been impossible to achieve without the help of Hiroyuki Sato's awesome Illustrator scripts. This set of scripts contains many useful tidbits, including the ability to round corners to arbitrary amounts without relying on Illustrator's Round Corners... effect.

This artwork was creating in several separate Illustrator files each containing about 80 artboards, an unfortunate workaround to the 100 artboard limitation that Illustrator currently imposes. This was in order to easily export the artwork once it was complete.

In order to use the artwork as a font, each stroke and effect was expanded and the paths were united to create as few paths as possible.

### Exporting the files to SVG
In order to convert the artwork to a font, it was necessary to first export the individual artboards to a series of SVG files. The easiest way to do this was to make sure that each artboard had the correct name and use the Save As... method. After selecting SVG as the format, you can check the Use Artboards option and create the SVG files in one process.

Unfortunately, Illustrator doesn't produce the most beautiful file names, but this can be remedied with the help of the command line. In my case, I wanted to remove the 'typicons_' it appended to each SVG file. Just `cd` to the folder with the exported files and run this script to replace the unwanted content. Run without `| /bin/sh` to see the expected output if your a little uncomfortable with the command line.

```
cd path/to/typicons

ls typicons_*.svg | awk '{print("mv "$1" "$1)}' | sed 's/typicons_//2' | /bin/sh
```

Of course, this eventually became a tedious process so I created a small node module to take care of this process. After doing this, I merged into the process a few more steps to take care of creating the `config.yml` file, creating the UIDs on the fly as well as the unicode code. You can see this module in the support folder on GitHub. The code is a little bit dirty but it speeds up the editing/update process. Now, processing the files was simple:

```
node process.js
```

This process combines the SVG files with a `meta.yml` file to quickly build to thif configuration file that was required.

### Producing the font
The first version of Typicons was created with a third party GUI, and this process was slow and repetitive. For the second version of Typicons, I wanted to switch to a script based approach to produce the font. (IcoMoon provides a web app to create fonts if the command line isn't your thing.) After some looking around, I came across the Fontello website that was doing just this. What's more, the source code for the website was openly available on GitHub. This meant, with a little tweaking, the same code could be used to create Typicons. Fortunately, the code was well documented enough for me to get it running.

The first step was to clone an example .font repository and see if I could get it working on my system. The steps to install the font building scripts are available in the README of the font builder script, which comes as submodule of each .font project. (Ensure you update this submodule to the latest version. It was a major headache get this running on my Mac until I did this.)

After setting this up, I could then create the required configuration file needed to process the SVG files. The config.yml file is a collection of the fonts metadata and a list of the glyphs to be added to the font. Each glyph contains the name of the icon, the Unicode character and any search terms appropriate to the font.

```yaml
glyphs:
  - uid: c2c0dca2cbf54863aad7e8b645fc81ee
    css: adjust-contrast
    code: 0x2710
    search: []
```

Once this file had the appropriate information, use the command line to `cd` to the project and run `make`. If the font-builder submodule is setup correctly, this should produce the different font formats, the CSS file and a demo HTML file showing the font in the browser.

Now that the font was being programatically generated, it is easy to edit the SVG files or the config.yml to edit, add and remove icons to the font.

Any questions? Hit me up on [Twitter](https://twitter.com/Typicons).