#!/bin/sh

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

# make a directory to put the gh-pages branch
mkdir -p gh-pages-branch/

cd gh-pages-branch

# now lets setup a new repo so we can update the gh-pages branch
git init
git config --local user.email levelup@thoughtworks.com > /dev/null 2>&1
git config --local user.name levelup > /dev/null 2>&1
git remote add --fetch origin https://github.com/twlevelup/watch_edition.git


# switch into the the gh-pages branch
if git rev-parse --verify origin/gh-pages > /dev/null 2>&1
then
    git checkout gh-pages
    # delete any old site as we are going to replace it
    # Note: this explodes if there aren't any, so moving it here for now
    git rm -rf .
else
    git checkout --orphan gh-pages
fi

# stage any changes and new files, include circleci config to avoid auto-build.
cp -a ../public/* .
mkdir -p  .circleci
cat > .circleci/config.yml <<EOF
version: 2
jobs:
  build:
    docker:
        - image: circleci/node:8.1.4
    steps:
      - run: "false"
    branches:
      ignore:
        - gh-pages
EOF

git add -A

# now commit
git commit --allow-empty -m "Deploy to GitHub pages"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force --quiet origin gh-pages
# go back to where we started and remove the gh-pages git repo we made and used
# for deployment
cd ..
rm -rf gh-pages-branch

echo "Finished Deployment!"
