import { join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    dts({
      entryRoot: join(__dirname, 'src'),
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: join(__dirname, 'src/index.ts'),
      name: 'ImdCreator',
      // the proper extensions will be added
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'element-plus',
        'vue',
        '@dreamimd/imd-parser',
      ],
    },
  },
})
