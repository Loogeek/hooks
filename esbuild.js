import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist/hooks',
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['esnext'],
    plugins: [dtsPlugin()],
  })
  .catch(() => process.exit(1));
