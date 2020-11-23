# TODO

- [ ] [...] Trovare il modo per rimuovere i tag head e html che vanno iniettati con browsersync quando viene messo in produzione **forse con https://www.npmjs.com/package/replace-in-file**
  - https://stackoverflow.com/questions/14177087/replace-a-string-in-a-file-with-nodejs?newreg=59bf23bc92f846ba80e0b7e340f4c89d
    - https://www.foxinfotech.in/2019/05/linux-unix-remove-html-tags-from-file-html-to-text.html
- [ ] [...] continuare a creare il menu
- [ ] Utilizzare le forme {{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }} {{ '/js/amp-script.js' | absolute_url }} per linkare i contenuti dato che tailwind css ha problemi nel rendering degli stili se usati tag liquid a metà classe es. bg-{{ site.color }}-600 [Jekyll reference](https://jekyllrb.com/docs/liquid/filters/) [Tailwind reference](https://tailwindcss.com/docs/optimizing-for-production) 
- [ ] Ricreare tutti i bloocks per tailwind css
- [ ] implementare le estensioni blog.bloocks.net, store.bloocks.net, challenges.bloocks.net, portfolio.cloocks.net, bloocks.dev (per il framework bloocks)
- [ ] logica bloocks più serrata, fare un area in helpers dove si riesce a importare gli stili tailwind in modo dinamico (font colori )
- [ ] AMP analytics e AMP ADSense e versioni non AMP
- [ ] Implementare forms
- [ ] Ecommerce cpn https://github.com/snipcart/stackbit-theme-planty/blob/master/config.yml
- [ ] **Implementare Alpine.js**
- [ ] cypress.io cypress run --record --key 8151b23a-8558-4275-8d15-acb2faae3510 
- [ ] Browsersync probelms ribuovere body html tags in production e renderlo funzionale per jekyll-admin https://github.com/jekyll/jekyll-admin/issues/243
- [ ] [X] [...] Ho creato la task 'gulp processAmpStyles' che dopo aver creato il sito in produzione, crea una versione nella cartella _includes, ma va integrato bene blog AMP problema nel processo di gulp, il problema consiste nel fatto che prima devo generare il sito jekyll e poi processare i css in modo corretto solo che amp richiede css in linea che non possono essere importati da _includes/ prima del build
- [ ] temi creare temi per store, fake comments, fake notifiche, integrzione json (per affiliazioni), integrazione thishirtify (o simili), snipchart, aree documenti, portfolio e sfide (challenges)
- [ ] script che copia il contenuto di _sites in docs/ perchè è li che vanno serviti i file e controllare la generazione ridondante della cartella docs/ in _sites/ durante il deploy production

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
- https://github.com/thedevdojo/tails
  - https://devdojo.com/tailwindcss/components

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
- https://github.com/JasonYao/JasonYao.github.io
- https://github.com/samanyougarg/hanuman

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


## Implementing workservices in AMP for PWA


https://github.com/matthodan/jekyll-asset-pipeline


https://devhints.io/jekyll


https://jekyllrb.com/docs/configuration/options/


https://stackoverflow.com/questions/54009824/how-to-build-jekyll-project-production-with-windows-command-line/54011686

     https://jekyllrb.com/docs/configuration/environments/


https://github.com/JasonYao/JasonYao.github.io


https://www.speedywp.it/combinare-la-potenza-di-una-pwa-su-pagine-amp/

      https://www.speedywp.it/service-worker.js


## AMP Blog post tutorials

- https://searchengineland.com/get-started-accelerated-mobile-pages-amp-240688
- https://neilpatel.com/blog/the-definitive-guide-to-accelerated-mobile-pages-amp/
- http://ampexamples.com/



# NPM usefull things

### NPM usefull packages

- https://www.npmjs.com/package/replace-in-file
- https://www.npmjs.com/package/del-cli
- https://preview.npmjs.com/package/find-remove

# Jekyll

## Posts resources lists

- https://awesomeopensource.com/projects/jekyll-plugin

## Plugins

- https://github.com/jeffreytse/jekyll-spaceship