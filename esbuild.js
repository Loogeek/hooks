import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

esbuild
  .build({
    entryPoints: ['packages/hooks/index.ts'],
    outdir: 'dist/packages/hooks',
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['esnext'],
    plugins: [dtsPlugin()],
  })
  .catch(() => process.exit(1));
