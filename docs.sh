#!/bin/env bash
yarn docs
git checkout gh-pages
mv -f docs/* ./
git add .
git commit -m "update"
git push
git checkout master