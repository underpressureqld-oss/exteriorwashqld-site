import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const cwd = process.cwd();
const nodeBin = process.execPath;
const rootDir = join(cwd, '..', '..');
const viteBin = process.platform === 'win32'
  ? join(rootDir, 'node_modules', '.bin', 'vite.cmd')
  : join(rootDir, 'node_modules', '.bin', 'vite');

function run(command, args) {
  let result;

  if (process.platform === 'win32') {
    const commandString = `"${command}" ${args.map(arg => `"${arg.replace(/"/g, '""')}"`).join(' ')}`;
    result = spawnSync(commandString, {
      cwd,
      stdio: 'inherit',
      shell: true,
    });
  } else {
    result = spawnSync(command, args, {
      cwd,
      stdio: 'inherit',
      shell: false,
    });
  }

  if (result.error) {
    console.error('Command failed:', command, args.join(' '));
    console.error(result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status);
  }
}

run(nodeBin, ['tools/generate-sitemap.js']);
run(nodeBin, ['tools/generate-llms.js']);
run(viteBin, ['build', '--outDir', '../../dist/apps/web']);
