import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pocketbasePath = join(__dirname, 'pocketbase.exe');
const args = process.argv.slice(2);

const child = spawn(pocketbasePath, args, {
  stdio: 'inherit',
  shell: false,
  windowsHide: true
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
