#! /usr/bin/env node
const { program } = require('commander')
const {getRequest, postRequest, patchRequest, deleteRequest } = require('./verbs');

program
    .command('get <url>')
    .description('sends get request to an endpoint')
    .action(getRequest);


program
    .command('post <url>')
    .description('sends a post request to an endpoint')
    .option('--data <data...>', 'json data if request comes with data')
    .action(postRequest);

program
    .command('patch <url>')
    .description('sends patch request to an endpoint')
    .option('--data <data...>', 'json data if request comes with data')
    .action(patchRequest);

program
    .command('delete <url>')
    .description('sends a delete request to an endpoint ')
    .action(deleteRequest);

program.parse();

