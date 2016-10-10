
# gh-repos

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gh-repos.svg)](https://www.npmjs.com/package/gh-repos) [![Downloads](https://img.shields.io/npm/dt/gh-repos.svg)](https://www.npmjs.com/package/gh-repos) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get one or all the owner repositories from GitHub.

## :cloud: Installation

```sh
$ npm i --save gh-repos
```


## :clipboard: Example



```js
const githubRepos = require("gh-repos");

// Get a specific repository (the result will be an array containing one element)
githubRepos("IonicaBizau/git-stats", function (err, repos) {
    console.log(err || repos);
    // [ { id: 30538630,
    //     name: 'git-stats',
    //     full_name: 'IonicaBizau/git-stats',
    //     owner: { login: 'IonicaBizau', ...},
    //     private: false,
    //     ...
    //     subscribers_count: 52 } ]
});

// Get all my repositories
githubRepos("IonicaBizau", function (err, repos) {
    console.log(err || repos);
    // [ { id: 20149013,
    //     name: '3x3-equation-solver',
    //     full_name: 'IonicaBizau/3x3-equation-solver',
    //     owner: {...},
    //     ...
    //     default_branch: 'master' },
    //   { id: 48318047,
    //     name: 'add-subtract-date',
    //     full_name: 'IonicaBizau/add-subtract-date',
    //     owner: {...},
    //     ...
    //     default_branch: 'master' },
    //   ...
    //   { id: 21358670,
    //     name: 'youtube-topmost',
    //     full_name: 'IonicaBizau/youtube-topmost',
    //     owner: {...},
    //     ...
    //     default_branch: 'master' } ]
});

// Use a token
githubRepos("IonicaBizau", "your token", function (err, repos) {
    // ...
});
```

## :memo: Documentation


### `ghRepos(input, token, cb)`
Get one or all the owner repositories from GitHub.

#### Params
- **String** `input`: The GitHub owner or repository full name (`owner/repo`).
- **String** `token`: An optional GitHub token.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`gh-repeat`](https://github.com/IonicaBizau/gh-repeat#readme)—Repetitive actions on multiple GitHub repositories.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
