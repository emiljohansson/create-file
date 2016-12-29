#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const createFile = require('./')

createFile(argv._[0], argv._[1])
