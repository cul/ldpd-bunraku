# ldpd-bunraku [![Build Status](https://travis-ci.org/cul/ldpd-biggert.svg?branch=master)](https://travis-ci.org/cul/ldpd-bunraku) [![Dependencies](https://img.shields.io/librariesio/github/cul/ldpd-bunraku.svg)](https://libraries.io/github/cul/ldpd-bunraku)
Jekyll site for the Barbara Curtis Adachi Bunraku Collection 🎎

<br>

## Basic Information:

- __Contact:__ {{ Name }}, {{ Group }}
- __Target url:__ e.g. `https://example.com`
- __Target host type:__ e.g., `s3`, `nginx`, or `gh-pages`
- __Bucket:__ _____ (if using `s3`)
  
## Features:

- [ ] __Active updates?__ 
- [ ] __Relational data?__
- [ ] __Student contributions?__
- [ ] __Custom search?__
- [ ] __IIIF?__ (`remote` or `local`, if `remote` describe path)
- [ ] __Maps?__
- [ ] __D3?__
- [ ] __Other:__ ______

## Dependencies

### JS (i.e. runtime)
- e.g., Jquery
- etc.

### Ruby (i.e. dev/test)
- e.g, Jekyll
- etc.

## Branches

#### `master`: The up-to-date production branch (Jekyll/back-end). 
- Travis pushes compiled site to `static` branch after tests pass.
- If using s3, Travis deploys compiled site to s3 prod bucket after tests pass.

#### `staging` : The staging branch (Jekyll/back-end)
- Travis pushes compiled site (rebuilt with repo name as baseurl) to `gh-pages` branch after tests pass.
- If using s3, Travis deploys compiled site (without baseurl) to s3 staging branch after tests pass.

#### `static` : The up-to-date compiled production site (static HTML)
- Built and pushed by Travis on successful commit to `master` branch.

#### `gh-pages` : A copy of the compiled staging site hosted + viewable via GitHub pages (static HTML)
- Built and pushed by Travis on successful commit to `staging` branch (viewable at `cul.github.io/REPO-NAME/`)


## Contributing (non-admin)

1. Clone the repository: `$ git clone https://github.com/REPO-NAME`
2. Install dependencies: `$ cd REPO-NAME && bundle`
3. Checkout your own branch: `$ git checkout -b MY-FEATURE`
4. Make your changes
5. Run tests locally: `$ bundle exec rake wax:test`
6. Push branch to remote repository.
7. Sumbit a PR to merge your branch into staging.
8. If tests pass, confirm merge into `staging` and delete your branch. This will trigger a deployment of the compiled site from staging to the `gh-pages` branch (and if you're using s3, to the staging bucket).
9. Preview the staged site (either at cul.github.io/REPO-NAME or the staging s3 bucket). If it looks good, submit a PR to merge staging into master.
10. If the tests from the PR pass, an admin will accept the merge, and Travis will deploy a backup/copy of the compiled site to the `static` branch (and if you're using s3, it will deploy to the prod s3 bucket as well).

[link to full wiki].

## Travis deployment set-up

[TO DO] Give basic steps and link to full wiki.
