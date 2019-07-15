# Alex Foxleigh's Blog Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/f029385c-a6de-41e7-bd68-839db1ceb8a5/deploy-status)](https://app.netlify.com/sites/thefoxleighblog/deploys)

This is a gatsby site framework which takes a page structure and builds a site from it.

## Folder structure

All pages reside in `src/library/pages`, every subfolder of pages (as well as pages itself) contains the following files:

- `index.md`: The contents of the page
- `hero.[ext]`: The hero image of the page (optional)
- `config.json`: The configuration of that page (optional)
- An `images` folder (optional)

## Page config

Page configs tell the site how to deal with particular pages, it's structure is as follows:

```json
{
  "redirect" : {
    "to" : "url",
    "method" : 301
  }
}
```

Here is an explanation of each item:

- `redirect`: This will tell the site to redirect any requests to this url to another url and which method to use (see [this article](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections) for more information about redirection methods) if no method is set, it will default to a 301.

Rather than call this file `redirect.json` I have called it `config.json` that way if I want to add other options in the future, I can.

## Page Meta Data

Gatsby uses a node package called [gray-matter](https://www.npmjs.com/package/gray-matter) to extract tags from a markdown document known as 'frontmatter'. Frontmatter looks like this:

```yml
---
tags: "legacy"
template: article
status: published
comments: true
author: Alex Foxleigh
title: "Blog title goes here"
date: "2010-04-13"
in_nav: false
bgPos: 50% 50%
excerpt: ''
---
```

As you can see, it can be used to provide meta data about an article. This log framework uses the following properties:

- `tags`: This can be used to provide additional information to the app, tags will automatically be added to the article as a class and they can also be used as hooks if you wanted to add your own functionality. In the example above, I have a 'legacy' tag, this tells my users that the article it is processing is from a previous version of my site and may have some issues.
- `template`: This tells Gatsby which template to use. In this instance, the article template, which is also the default so this wouldn't actually be needed.
- `status`: Tells gatsby if the article is published or draft, published is the default so in this instance, it wouldn't actually be needed.
- `author`: You guessed it, the author of the post. You can set a default here too.
- `title`: We've come to the first of two required tags, this is the tag that tells gatsby what the title of the page is.
- `date`: The second required tag, this tells gatsby which date you wrote the article. It is to be added in the format YYYY-MM-DD.
- `in_nav`: This is only required on category level pages and tells the site if a category should appear in the primary navigation. Defaults to false.
- `bgPos`: How the hero background should be positioned in css. Defaults to `50% 50%`
- `excerpt`: Is your article written in a way that prevents you from using the top of it for an excerpt? That's fine, just add it here.

## Images

### Hero image

Each folder should have a file called `hero.ext`, the `.ext` part is up to you to a degree but can be one of `.jpg`, `.png`, `.svg` or `.gif`. If you do not include this image then the post will display a band of colour instead.

The hero image will be loaded onto the page as a background image with a default position of 50% 50%, this will mean the image is centred to the box, as this may not always be suitable for every image, you can override this with frontmatter tags using the `bgPos` property. You can find out more information about CSSs `background-position`, [here](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)

### Article images

Images can be added from either an external url, from the `/src/images` folder or from the articles' folder itself. I recommend created an `images` folder within the articles' folder and linking from there. If you were to link to an image in the same directory (or subdirectory) don't forget to start with a `./` or it won't work (eg: `./images/name-of-image.jpg)` will work but `images/name-of-image.jpg` will not)
