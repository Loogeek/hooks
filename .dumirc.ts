import { defineConfig } from 'dumi';

const repo = 'hooks'

export default defineConfig({
  outputPath: 'docs',
  themeConfig: {
    name: 'hooks',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/'
});
