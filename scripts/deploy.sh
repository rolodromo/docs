#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rolodromo/rolodromo.github.io.git master

