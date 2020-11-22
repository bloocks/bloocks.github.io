# TODO

- cypress.io cypress run --record --key 8151b23a-8558-4275-8d15-acb2faae3510 
- https://github.com/jekyll/jekyll-admin/issues/243
- blog AMP problema nel processo di gulp, il problema consiste nel fatto che prima devo generare il sito jekyll e poi processare i css in modo corretto solo che amp richiede css in linea che non possono essere importati da _includes/ prima del build
- temi creare temi per store, fake comments, fake notifiche, integrzione json (per affiliazioni), integrazione thishirtify (o simili), snipchart, aree documenti, portfolio e sfide (challenges)
- implementare le estensioni blog.bloocks.net, store.bloocks.net, challenges.bloocks.net, portfolio.cloocks.net, bloocks.dev (per il framework bloocks)

# Buil process

## npm

on first install:  npm install -g node-gyp
## Get started
* `npm install -g node-gyp`
* `bundle install` to install Ruby gems
* `npm install`
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production

### Building stuffs

-

## Blog guides

- markdown iphone https://gordonansell.com/how-i-use-jekyll-on-both-macos-and-ios/
- https://indefiniteloop.com/blog/code/jekyll-jenkins-blogging-on-the-go.html
- https://css-tricks.com/gulp-for-beginners/
  - https://gist.github.com/panoply/c9d29d91cccbd1d8d07ea01bb46937ad
  - https://browsersync.io/docs/gulp
  - https://github.com/mizchi/next-amp-tailwind-purgecss

## AMP, tailwind css purgecss

- https://github.com/zerodevx/amp-build

### Templateing resources

- https://github.com/aniftyco/awesome-tailwindcss
- https://devdojo.com/tailwindcss/templates
- https://mertjf.github.io/tailblocks/
- https://stitches.hyperyolo.com/
- https://tailwindcomponents.com/

#### Templating Single problems

- https://dev.to/fayaz/making-a-navigation-drawer-sliding-sidebar-with-tailwindcss-blueprint-581l
- https://codepen.io/simondepelchin/pen/ypwEBN

### Tools

- https://nerdcave.com/tailwind-cheat-sheet
- https://umeshmk.github.io/Tailwindcss-cheatsheet/
- https://transform.tools/css-to-tailwind
- 

#### Plugins

- **https://www.telerik.com/blogs/top-15-tailwind-css-plugins-resources**
- https://www.tailwindtoolbox.com/plugins

### Tutorials

- https://cristianpb.github.io/blog/bulma-amp
- https://github.com/mhanberg/jekyll-purgecss
- https://blog.frankdejonge.nl/setting-up-docs-with-tailwind-css-and-github-pages/
- https://laptrinhx.com/jekyll-starter-styled-with-tailwind-css-3277181270/
- https://www.telerik.com/blogs/top-15-tailwind-css-plugins-resources

# AMP

- https://github.com/prototypearea/awesome-amp

## Tools

- https://amp.dev/boilerplate/
- https://app.amptemplates.io/
  - https://www.amptemplates.io/
- https://github.com/tea3/hexo-generator-amp
- https://github.com/ampproject/amp-toolbox
- https://github.com/rkazakov/ampify
  - https://github.com/search?q=AMP+HTML

- https://github.com/GetPublii/Publii

## AMP Coockie consent

- https://stackoverflow.com/questions/61929226/how-to-construct-amp-cookie-consent-with-the-help-of-amp-story-consent
- https://amp.dev/documentation/components/amp-consent/
  - https://amp.dev/documentation/examples/?category=user-consent&format=websites#filter
  - **https://playground.amp.dev/?url=https%3A%2F%2Fpreview.amp.dev%2Fdocumentation%2Fexamples%2Fuser-consent%2Fclient_side_user_consent_flow&format=websites&_gl=1*16hwmw3*_ga*YW1wLVpkZTNzZHowRlhhZk1mQ0M0OWlrRVE.**
  - https://playground.amp.dev/?url=https%3A%2F%2Fpreview.amp.dev%2Fdocumentation%2Fexamples%2Fuser-consent%2Fstory_user_consent&format=websites

- https://www.iubenda.com/it/help/22140-cookie-solution-amp-wordpress#siti-che-non-usano-wordpress
  - https://amp.dev/documentation/components/amp-consent/#basic-blocking-behaviors
  - https://blog-static.leevia.com/amp.html

- https://community.cookiepro.com/s/article/UUID-94cf9b13-1998-d989-a5e0-d01a73a2e0a7

## AMP Blog post tutorials

- https://searchengineland.com/get-started-accelerated-mobile-pages-amp-240688
- https://neilpatel.com/blog/the-definitive-guide-to-accelerated-mobile-pages-amp/
- http://ampexamples.com/

# Jekyll Starter Tailwind
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

A starter kit for using [Tailwind](https://tailwindcss.com) with [Jekyll](https://jekyllrb.com/) that includes:
* A barebones Jekyll starter theme
* A Gulpfile that does the following:

    * Compiles Tailwind
    * Strips out unused CSS using Tailwind's `purge` option
    * Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
    * Minifies your CSS
    * Compiles Jekyll
    * Runs [Browsersync](https://www.browsersync.io/) for local development

## What is Tailwind?
>"Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
–[Tailwind](https://tailwindcss.com)

## What is Jekyll?
>"Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by Apache, Nginx or another web server. Jekyll is the engine behind GitHub Pages, which you can use to host sites right from your GitHub repositories."
–[Jekyll](https://jekyllrb.com/)

## Requirements
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

## Get started
* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production


## Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/taylorbryant/jekyll-starter-tailwind)

Note: By default, Netlify uses `jekyll build` as the build command. The included `netlify.toml` file will override it to use `npm run build`.

## License
[MIT](https://github.com/taylorbryant/jekyll-starter-tailwind/blob/master/LICENSE.md)

## How you can help
Enjoying Jekyll Starter Tailwind and want to help? You can:
* [Create an issue](https://github.com/taylorbryant/jekyll-starter-tailwind/issues/new) with some constructive criticism
* [Submit a pull request](https://github.com/taylorbryant/jekyll-starter-tailwind/compare) with some improvements to the project

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://phproberto.com"><img src="https://avatars0.githubusercontent.com/u/1119272?v=4" width="100px;" alt=""/><br /><sub><b>Roberto Segura</b></sub></a><br /><a href="https://github.com/taylorbryant/jekyll-starter-tailwind/commits?author=phproberto" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/benmp"><img src="https://avatars3.githubusercontent.com/u/9081154?v=4" width="100px;" alt=""/><br /><sub><b>benmp</b></sub></a><br /><a href="https://github.com/taylorbryant/jekyll-starter-tailwind/commits?author=benmp" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jd4no"><img src="https://avatars0.githubusercontent.com/u/15043675?v=4" width="100px;" alt=""/><br /><sub><b>Joey Defourneaux</b></sub></a><br /><a href="https://github.com/taylorbryant/jekyll-starter-tailwind/commits?author=jd4no" title="Code">💻</a></td>
    <td align="center"><a href="https://shime.sh"><img src="https://avatars3.githubusercontent.com/u/703563?v=4" width="100px;" alt=""/><br /><sub><b>Hrvoje Šimić</b></sub></a><br /><a href="https://github.com/taylorbryant/jekyll-starter-tailwind/commits?author=shime" title="Code">💻</a></td>
    <td align="center"><a href="https://alejof.dev"><img src="https://avatars2.githubusercontent.com/u/7116453?v=4" width="100px;" alt=""/><br /><sub><b>Alejandro Figueroa</b></sub></a><br /><a href="https://github.com/taylorbryant/jekyll-starter-tailwind/commits?author=alexphi" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
