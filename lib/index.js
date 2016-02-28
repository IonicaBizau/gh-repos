"use strict";

const GitHub = require("gh.js")
    , ownerRepo = require("owner-repo")
    , typpy = require("typpy")
    ;

/**
 * ghRepos
 * Get one or all the owner repositories from GitHub.
 *
 * @name ghRepos
 * @function
 * @param {String} input The GitHub owner or repository full name (`owner/repo`).
 * @param {String} token An optional GitHub token.
 * @param {Function} cb The callback function.
 */
module.exports = function ghRepos(input, token, cb) {
    if (typeof token === "function") {
        cb = token;
        token = undefined;
    }
    let parsed = ownerRepo(input)
      , gh = new GitHub({ token: token })
      , done = (err, data) => {
            if (data && typpy(data, Object)) {
                data = [data];
            }
            cb(err, data, gh);
        }
      ;

    parsed.repo
        ? gh.get(`repos/${parsed.full_name}`, done)
        : gh.get(`users/${parsed.full_name}/repos`, { all: true }, done)
        ;
};
