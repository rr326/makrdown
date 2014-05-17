# Grunt template for serving markdown files

This is a simple Grunt template that watches for **/*.md and serves up a live-updating view in the browser.

Note it also uses Bootstrap as a simple template.

### TODO

* Make an actual self-contained task so I don't have to manually merge with a projects main Gruntfile.
* Use proper grunt variables instead of hardcoded config (eg: '.tmp/markdown')


### Installation in a project
* As a submodule


    git submodule add git://github.com/rr326/makrdown.git markdown
    git submodule update
    ln -s markdown/Gruntfile.js .
    ln -s markdown/package.json .
    ln -s markdown/md_template.html .
    npm install


    