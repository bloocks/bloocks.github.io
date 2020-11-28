# TODO

- [ ] vedere se tailwind va con jss https://cssinjs.org/
  - https://github.com/cssinjs/theming
  - https://gist.github.com/wildfrontend/a12bc826b3a26ae81c6657b56fb6449f 
- [X] Trovare il modo per rimuovere i tag head e html che vanno iniettati con browsersync quando viene messo in produzione **forse con https://www.npmjs.com/package/rexreplace oppure https://www.npmjs.com/package/replace-in-file**
  - https://stackoverflow.com/questions/14177087/replace-a-string-in-a-file-with-nodejs?newreg=59bf23bc92f846ba80e0b7e340f4c89d
    - https://www.foxinfotech.in/2019/05/linux-unix-remove-html-tags-from-file-html-to-text.html
- [X] nello scrpt npm aggiugere copia file  verso la cartella docs con https://www.npmjs.com/package/copyfiles
- [ ] Nello script npm run build:bloocksprod aggiungere un modo per riuscire a copiare il contenuto CSS in file HTML di style.css in un file _includes/bloocks/themes/amp/css.html
- [ ] Script npm per unire, gli stili on page e inserirli nel file style.css minimizzati
- [ ] npm per generare i link assoluti del sito in produzione (per ora genera link cosi href"/indirizzo/link.html")
- [ ] Nello script npm run build:bloocksprod implementare anche imagemin per minimizzare le immagini https://www.npmjs.com/package/imagemin-cli
- [ ] Implementare analytics, tag manager sia per amp che per aree non amp
- [ ] [...] continuare a creare il menu
- [ ] Implementare una logica per utilizzare jekyll picture tag sfruttando https://statically.io
- [ ] Utilizzare le forme {{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }} {{ '/js/amp-script.js' | absolute_url }} per linkare i contenuti dato che tailwind css ha problemi nel rendering degli stili se usati tag liquid a metà classe es. bg-{{ site.color }}-600 [Jekyll reference](https://jekyllrb.com/docs/liquid/filters/) -- https://stackoverflow.com/questions/30011684/can-you-use-jekyll-layout-variables-in-pages -- [Tailwind reference](https://tailwindcss.com/docs/optimizing-for-production) 
- [ ] Ricreare tutti i bloocks per tailwind css
- [ ] implementare le estensioni blog.bloocks.net, store.bloocks.net, challenges.bloocks.net, portfolio.bloocks.net, bloocks.dev (per il framework bloocks)
- [ ] logica bloocks più serrata, fare un area in helpers dove si riesce a importare gli stili tailwind in modo dinamico (font colori )
- [ ] AMP analytics e AMP ADSense e versioni non AMP
- [ ] Implementare forms
- [ ] Ecommerce cpn https://github.com/snipcart/stackbit-theme-planty/blob/master/config.yml
- [ ] **Implementare Alpine.js**
  - https://www.alpinetoolbox.com/
- [ ] Browsersync probelms ribuovere body html tags in production e renderlo funzionale per jekyll-admin https://github.com/jekyll/jekyll-admin/issues/243
- [ ] [X] [...] Ho creato la task 'gulp processAmpStyles' che dopo aver creato il sito in produzione, crea una versione nella cartella _includes, ma va integrato bene blog AMP problema nel processo di gulp, il problema consiste nel fatto che prima devo generare il sito jekyll e poi processare i css in modo corretto solo che amp richiede css in linea che non possono essere importati da _includes/ prima del build
- [ ] temi creare temi per store, fake comments, fake notifiche, integrzione json (per affiliazioni), integrazione thishirtify (o simili), snipchart, aree documenti, portfolio e sfide (challenges)
- [ ] script che copia il contenuto di _sites in docs/ perchè è li che vanno serviti i file e controllare la generazione ridondante della cartella docs/ in _sites/ durante il deploy production
- [ ] [...] AMP analytics e non **https://github.com/ampproject/amphtml/tree/master/examples**
  - https://amp.dev/it/documentation/components/amp-analytics/
  - https://samuelschmitt.com/google-tag-manager-analytics-tutorial/ga-gtm-setup/
    - https://samuelschmitt.com/google-tag-manager-analytics-tutorial/
  - https://developers.google.com/gtagjs/devguide/amp
  - https://developers.google.com/analytics/devguides/collection/amp-analytics
  - https://amp.dev/it/documentation/guides-and-tutorials/contribute/integrate-your-analytics-tools/?format=websites
  - https://github.com/ampproject/amphtml/blob/master/examples/analytics-vendors.amp.html
  - https://amp.dev/it/documentation/guides-and-tutorials/optimize-and-measure/configure-analytics/analytics-vendors/?format=websites
- [ ] [...] Capire e implementare google tag manager in AMP e non e sfruttare: https://www.tagmanageritalia.it/guida-base-come-gestire-la-cookie-law-con-onetrust/#gref
  - https://www.analyticsmania.com/post/gdpr-cookie-consent-notification-with-google-tag-manager/
  - https://support.google.com/tagmanager/answer/9205783?hl=it
  - https://www.tagmanageritalia.it/guida-base-gestire-client-id-amp-google-tag-manager/#gref
  - https://www.tagmanageritalia.it/come-implementare-google-analytics-in-google-tag-manager/#gref
  - https://dataenthusiast.it/google-tag-manager/creare-il-tag-google-analytics-in-google-tag-manager/
  - https://samuelschmitt.com/google-tag-manager-analytics-tutorial/ga-gtm-setup/
  - https://www.simoahava.com/analytics/accelerated-mobile-pages-via-google-tag-manager/
  - https://pilotdigital.com/blog/optimizing-gtm-for-page-speed/
- [ ] Creare il bloocks AMP images https://amp.dev/documentation/examples/style-layout/how_to_support_images_with_unknown_dimensions/
- [ ] Capire i tools per AMP:
  - `<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>`
  - `<script async custom-element="amp-consent" src="https://cdn.ampproject.org/v0/amp-consent-0.1.js"></script>`
  - `<script async custom-element="amp-geo" src="https://cdn.ampproject.org/v0/amp-geo-0.1.js"></script>`
  - `<script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>`
    - https://amp.dev/documentation/components/amp-lightbox/
  - `<script async custom-element="amp-web-push" src="https://cdn.ampproject.org/v0/amp-web-push-0.1.js"></script>`


- [ ] scrivere al proprietario di jekyll picture tag per capire se è disposto a cedere la licenza di utlizzo https://github.com/rbuchberger/jekyll_picture_tag/blob/master/LICENSE.txt
  - [ ] npm per src set per generare da tag img più efficienti come fa jekyl_picture_tag
- [ ] [...] Capire controllare licenza ed implementare i seguenti plugin
  - https://github.com/jeffreytse/jekyll-spaceship
  - https://github.com/tkareine/jekyll-minibundle
  - https://github.com/wildlyinaccurate/jekyll-responsive-image
- [ ] cypress.io cypress run --record --key 8151b23a-8558-4275-8d15-acb2faae3510 

# Buil process

## npm build

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
* `npm run build:bloocksprod` to compile the site for production on docs folder and optimize the code

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

- **https://github.com/ampproject/amphtml/tree/master/examples**

### Templateing resources

- https://github.com/aniftyco/awesome-tailwindcss
- https://devdojo.com/tailwindcss/templates
- https://mertjf.github.io/tailblocks/
- https://stitches.hyperyolo.com/
- https://tailwindcomponents.com/
- https://github.com/thedevdojo/tails
  - https://devdojo.com/tailwindcss/components
- https://tailwindcss.com/
- https://tailwindui.com/preview
- https://tailwindui.com/components/marketing/sections/heroes
- https://tailwindui.com/components/marketing/elements/headers

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
- https://github.com/lorisleiva/tailwindcss-plugins
- https://themesberg.com/blog/tailwind-css/plugins
- 

### Tutorials

- https://cristianpb.github.io/blog/bulma-amp
- https://github.com/mhanberg/jekyll-purgecss
- https://blog.frankdejonge.nl/setting-up-docs-with-tailwind-css-and-github-pages/
- https://laptrinhx.com/jekyll-starter-styled-with-tailwind-css-3277181270/
- https://www.telerik.com/blogs/top-15-tailwind-css-plugins-resources

# AMP themes

- https://github.com/prototypearea/awesome-amp
- https://github.com/JasonYao/JasonYao.github.io
- https://github.com/samanyougarg/hanuman
- https://github.com/zerodevx/amp-build
- https://github.com/zerodevx/amp-build
- **https://github.com/JasonYao/JasonYao.github.io**
- https://gitlab.com/MrCsabaToth/mrcsabatoth.gitlab.io
- https://github.com/LordAmit/jekyll-amp-sample

## AMP Tools

- https://amp.dev/boilerplate/
- https://app.amptemplates.io/
  - https://www.amptemplates.io/
- https://github.com/tea3/hexo-generator-amp
- https://github.com/ampproject/amp-toolbox
- https://github.com/rkazakov/ampify
  - https://github.com/search?q=AMP+HTML
- https://developers.google.com/web/tools/workbox
- https://amp.dev/documentation/components/amp-lightbox/
- https://github.com/juusaw/amp-jekyll

## Amp javascript menu

- 

## Amp images tutorial

- https://amp.dev/documentation/examples/style-layout/how_to_support_images_with_unknown_dimensions/?format=websites

## AMP Coockie consent

### NOT AMP

- https://blog.stranianelli.com/jekyll-e-cookie-consent/
  - https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/_includes/cookie-consent.html

- https://www.quantcast.com/products/choice-consent-management-platform/
- https://www.onetrust.com/free-edition/

#### Guides

- **https://www.analyticsmania.com/post/gdpr-cookie-consent-notification-with-google-tag-manager/#pros-and-cons**
  - **https://www.onetrust.com/free-edition/**
  - https://www.analyticsmania.com/google-tag-manager-recipes/gdpr-cookie-consent/
  - https://support.google.com/analytics/answer/7486055

### AMP

- https://stackoverflow.com/questions/61929226/how-to-construct-amp-cookie-consent-with-the-help-of-amp-story-consent
- https://amp.dev/documentation/components/amp-consent/
  - https://amp.dev/documentation/examples/?category=user-consent&format=websites#filter
  - **https://playground.amp.dev/?url=https%3A%2F%2Fpreview.amp.dev%2Fdocumentation%2Fexamples%2Fuser-consent%2Fclient_side_user_consent_flow&format=websites&_gl=1*16hwmw3*_ga*YW1wLVpkZTNzZHowRlhhZk1mQ0M0OWlrRVE.**
  - https://playground.amp.dev/?url=https%3A%2F%2Fpreview.amp.dev%2Fdocumentation%2Fexamples%2Fuser-consent%2Fstory_user_consent&format=websites

- https://www.iubenda.com/it/help/22140-cookie-solution-amp-wordpress#siti-che-non-usano-wordpress
  - https://amp.dev/documentation/components/amp-consent/#basic-blocking-behaviors
  - https://blog-static.leevia.com/amp.html

- https://community.cookiepro.com/s/article/UUID-94cf9b13-1998-d989-a5e0-d01a73a2e0a7
- https://github.com/ampproject/amphtml/issues/13716

## Implementing workservices in AMP for PWA

### AMP Blog post tutorials

- https://www.speedywp.it/combinare-la-potenza-di-una-pwa-su-pagine-amp/
  - https://www.speedywp.it/service-worker.js

https://github.com/matthodan/jekyll-asset-pipeline


https://devhints.io/jekyll


https://jekyllrb.com/docs/configuration/options/


https://stackoverflow.com/questions/54009824/how-to-build-jekyll-project-production-with-windows-command-line/54011686

     https://jekyllrb.com/docs/configuration/environments/








## AMP Blog post tutorials

- https://searchengineland.com/get-started-accelerated-mobile-pages-amp-240688
- https://neilpatel.com/blog/the-definitive-guide-to-accelerated-mobile-pages-amp/
- http://ampexamples.com/
- https://craftweeks.com/en/set-google-custom-search-on-amp-static-sites/
- https://searchengineland.com/googles-amp-project-announces-new-consent-component-ahead-of-gdpr-compliance-deadline-295633
- https://csaba.page/blog/amp-site-improvements.html
- https://amitsealami.com/blog/2020/07/18/using-amp-in-jekyll/
- https://www.simoahava.com/analytics/accelerated-mobile-pages-via-google-tag-manager/
- https://www.johnnolan.dev/blog/2017/jekyll-amp-setup/


# NPM usefull things

### NPM usefull packages

- https://github.com/permalinks/permalinks
- https://www.npmjs.com/package/pretty-delay-cli
- https://www.npmjs.com/package/imagemin-cli
- https://github.com/badrap/bar-of-progress
- https://github.com/matt-bailey/grunt-frontend-boilerplate
- https://github.com/here-be
- https://www.npmjs.com/package/foreach-cli
- https://preview.npmjs.com/package/find-remove
- https://www.npmjs.com/package/amphtml-validator
  - https://www.npmjs.com/package/workbox-cli
  - https://www.npmjs.com/package/gulp-amphtml-validator

- npm install @ampproject/toolbox-cli
  - https://blog.amp.dev/2019/08/08/announcing-amp-toolbox-1-0/
- https://www.npmjs.com/package/purgecss
- https://www.npmjs.com/package/npm-run-all
- https://www.npmjs.com/package/html-minifier
- https://www.npmjs.com/package/static-sitemap-cli

- https://cssinjs.org/?v=v10.5.0
  - https://gist.github.com/wildfrontend/a12bc826b3a26ae81c6657b56fb6449f


- [X] https://www.npmjs.com/package/rexreplace
- [X] https://www.npmjs.com/package/replace-in-file
- [X] https://www.npmjs.com/package/del-cli

https://htmx.org/

# Jekyll

## Posts resources lists

- https://awesomeopensource.com/projects/jekyll-plugin

## Plugins

- https://github.com/jeffreytse/jekyll-spaceship
- https://github.com/tkareine/jekyll-minibundle
- https://github.com/wildlyinaccurate/jekyll-responsive-image

## Themes and scripts

- https://github.com/UriShX/Jekyll-portfolio
- https://github.com/JasonYao/JasonYao.github.io
- https://github.com/daattali/beautiful-jekyll
- https://github.com/tailwindlabs/tailwindcss-setup-examples/tree/master/examples/jekyll

### Jekyll scraping tools

- https://github.com/nishantwrp/gsoc-organizations-site
  - https://github.com/nishantwrp/gsoc-organizations-scraper

### Other tools

- https://staticman.net/
- https://utteranc.es/
- https://github.com/pmarsceill/jekyll-seo-gem


# Other tools

### Static website generator

- https://github.com/GetPublii/Publii


### CDN's Varie

- https://statically.io
  - Sample to use image https://cdn.statically.io/img/fomofoto.github.io/assets/images/prezzels.jpg
  - Sample html/css/js asset from github that will be minified by adding .min https://cdn.statically.io/gh/:user"jojekyll"/:repo"fleektest"/:tag"main"/:file"wp-includes/js/jquery/




# Coockie consent

## Tools interessanti

- https://www.quantcast.com/measure
- https://cookiescript.info
- https://jekyllcodex.org/without-plugin/cookie-consent/
- https://www.cookieconsent.com/



# Altri tool non inerenti

- https://www.scraperapi.com/documentation
- http://httpbin.org
- https://web-platform-tests.org/
- https://github.com/mui-org/material-ui
  - https://thefront-styleguide.maccarianagency.com/