# Prerequisites
* Make sure you have lts node.js running on your hardware at least support `es5` features like `exports` and `require`
* Also make sure you've run `npm install` to install all testing dependencies and the command line library

# How to run tests
`npm test`

# How to run in command line
1. Run `npm link` to create a symbolic link to `/usr/local/bin/date-diff`
2. `date-diff diff <first_date> <second_date> -f <optional_format>`

# What to improve
* Date formats (`src/formats.js`) can be extended to support more formats, currently only support (y-m-d, d/m/y, d-m-y)
* The regular expression made for the format validation can be more precise