# ldpd-bunraku [![Dependencies](https://img.shields.io/librariesio/github/cul/ldpd-bunraku.svg)](https://libraries.io/github/cul/ldpd-bunraku)
Jekyll site for the Barbara Curtis Adachi Bunraku Collection 🎎

### Basic Information:

- __Contact:__ (DIAG)
- __Target url:__ <https://bunraku.library.columbia.edu>
- __Target host type:__ `s3`

### Features:

- [ ] __Active updates__
- [x] __Relational data__
- [ ] __Student contributions__
- [x] __Custom search__ (fielded)
- [ ] __IIIF__ (`remote` or `local`, if `remote` describe path)
- [ ] __Maps__
- [x] __D3__
- [ ] __Other:__ ______

### Dependencies

#### JS (i.e. runtime)
- boostrap4
- d3js
- elasticLunr
- jquery
- jquery migrate
- popper

#### Ruby (i.e. dev/test)
- jekyll
- rspec
- selenium-webdriver
- chromedriver-helper
- capybara
- rack-jekyll
- wax_tasks

### Branches

#### `main`: The latest approved changes.
- Pushes to this branch automatically trigger a test build and run rspec tests.

#### `staging` : The staging branch (deploy to staging bucket)
- GitHub Actions deploys the site to the staging bucket after tests pass.

#### `production` : The staging branch (deploy to production bucket)
- GitHub Actions deploys the site to the production bucket after tests pass. (https://bunraku.cul.columbia.edu)

### Contributing

1. Clone the repository: `$ git clone https://github.com/REPO-NAME`
2. Install dependencies: `$ cd REPO-NAME && bundle`
3. Checkout your own branch: `$ git checkout -b MY-FEATURE`
4. Make your changes
5. Run tests locally: `$ bundle exec rake wax:test`
6. Push branch to remote repository.
7. Sumbit a PR to merge your branch into `main`.
8. If tests pass, confirm merge into `main` and delete your branch.
9. Preview the staging site (in the staging s3 bucket). If it looks good, submit a PR to merge `staging` into `production`.
10. If the tests from the PR pass, an admin will accept the merge, and GitHub Actions will deploy the compiled site to the production bucket and the changes will be visible at https://bunraku.cul.columbia.edu.

[link to full wiki].

### Travis deployment set-up

[TO DO] Give basic steps and link to full wiki.
