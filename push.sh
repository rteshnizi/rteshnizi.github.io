#!/bin/sh

setup_git() {
	git config --global user.email "travis@travis-ci.org"
	git config --global user.name "Travis CI"
}

commit_website_files() {
	git checkout -b master
	git add ./build/* -f
	git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
	git remote add origin https://${GH_TOKEN}@github.com/rteshnizi/rteshnizi-dev.git
	git push --set-upstream origin master
}

echo "Starting push"
setup_git
echo "git is setup"
commit_website_files
echo "Commited the crimes"
upload_files
echo "Pushed"
