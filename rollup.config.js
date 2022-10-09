import esbuild from "rollup-plugin-esbuild";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import dts from "rollup-plugin-dts";

const PLUGINS = [
  babel({
    exclude: "node_modules/**",
  }),
  esbuild({
    target: "esnext",
  }),
  terser(),
]

export default [
  {
    input: "src/index.ts",
    output: { file: "dist/web.js", format: "cjs" },
    plugins: PLUGINS,
    external: ['arrify', 'await-to-js', 'omit.js']
  },
  {
    input: "src/index.ts",
    output: { file: "dist/web.esm.js", format: "esm" },
    plugins: [
      ...PLUGINS,
      resolve(),
    ],
    external: ['arrify', 'await-to-js', 'omit.js']
  },
  {
    input: "src/index.ts", // 将来改为专门的node.ts
    output: { file: "dist/node.esm.js", format: "esm" },
    plugins: PLUGINS,
    external: ['arrify', 'await-to-js', 'omit.js']
  },
  {
    input: "src/index.ts",// 将来改为专门的node.ts
    output: { file: "dist/node.js", format: "cjs" },
    plugins: PLUGINS,
    external: ['arrify', 'await-to-js', 'omit.js']
  },
  {
    input: "src/index.ts", // 将来改为专门的web.umd.ts
    output: { file: "dist/web.umd.js", format: "umd", name: "LioFeUtil"},
    external: [],
    plugins: PLUGINS,
    external: ['arrify', 'await-to-js', 'omit.js']
  },
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    external: [],
    plugins: [dts({ respectExternal: true })],
    external: ['arrify', 'await-to-js', 'omit.js']
  },
];