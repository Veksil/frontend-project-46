import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

export default function gendiff(path1, path2) {
  const normPath1 = path.resolve(process.cwd(), path1);
  const normPath2 = path.resolve(process.cwd(), path2);

  const file1 = readFileSync(normPath1, 'utf-8');
  const file2 = readFileSync(normPath2, 'utf-8');

  const parseFile1 = JSON.parse(file1);
  const parseFile2 = JSON.parse(file2);

  const keys = _.union(Object.keys(parseFile1), Object.keys(parseFile2)).sort();

  const itog = [];
  const levelSpace = '  ';
  itog.push('{');
  const result = keys.map((key) => {
    if (Object.hasOwn(parseFile1, key) && (Object.hasOwn(parseFile2, key))) {
      if (parseFile1[key] === parseFile2[key]) {
        itog.push([`${levelSpace}${key}: ${parseFile1[key]}`]);
        return;
      }
      itog.push([`${levelSpace}- ${key}: ${parseFile1[key]}`]);
      itog.push([`${levelSpace}+ ${key}: ${parseFile2[key]}`]);
      return;
    } if (Object.hasOwn(parseFile1, key) && (!Object.hasOwn(parseFile2, key))) {
      itog.push([`${levelSpace}- ${key}: ${parseFile1[key]}`]);
      return;
    } if (!Object.hasOwn(parseFile1, key) && (Object.hasOwn(parseFile2, key))) {
      itog.push([`${levelSpace}+ ${key}: ${parseFile2[key]}`]);
    }
  });
  itog.push('}');
  console.log(itog.join('\n'));
  return itog;
}
