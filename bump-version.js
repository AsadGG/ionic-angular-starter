import { existsSync, readFileSync, writeFileSync } from 'node:fs';
const packageJsonExist = existsSync('./package.json');
if (!packageJsonExist) {
  console.error('package.json does not exist');
  process.exit(1);
}
const json = JSON.parse(readFileSync('./package.json'));
const [major, minor, patch] = json.version.split('.');
const newPatch = Number(patch) + 1;
const newVersion = [major, minor, newPatch].join('.');
json.version = newVersion;
writeFileSync('./package.json', JSON.stringify(json, undefined, 2));
