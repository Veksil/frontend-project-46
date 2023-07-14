import { Command } from 'commander';
// eslint-disable-next-line import/extensions
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('0.0.1')
  .option('-f, --format type <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    gendiff(filepath1, filepath2);
  });

program.parse();
