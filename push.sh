#!/bin/sh

setup_git() {
	git config --global user.email "travis@travis-ci.org"
	git config --global user.name "Travis CI"
}

commit_website_files() {
	git checkout -b master
	git add ./build/*
	git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
	git remote add origin https://${GH_TOKEN}@github.com/rteshnizi/rteshnizi-dev.git
	git push --set-upstream origin master
}

setup_git
commit_website_files
upload_files