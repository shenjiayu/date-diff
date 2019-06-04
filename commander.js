#!/usr/bin/env node

const program = require('commander');
const { diff } = require('./src');

program
  .version('1.0.0')
  .description('Date diff function');

program
  .command('diff <first_date> <second_date>')
  .description('Calculate days diff between two dates')
  .option('-f, --format <value>', 'Format of the date', '')
  .action((first_date, second_date, cmd) => {
    console.log(diff(first_date, second_date, cmd.format));
  });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}

program.parse(process.argv);