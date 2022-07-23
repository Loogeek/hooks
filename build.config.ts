import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['packages/hooks'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
