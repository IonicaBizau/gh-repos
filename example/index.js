const githubRepos = require("../lib");

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
