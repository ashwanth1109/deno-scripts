import { bundle } from "https://deno.land/x/bundler/mod.ts";
import { ensureFile } from "https://deno.land/std/fs/mod.ts";

const inputMap = {
  "src/index.ts": `console.log("Hello World")`,
};

const fileMap = {
  "scripts/mdx-parser/index.ts": "dist/mdx-parser/index.js",
};

const { outputMap, cacheMap, graph } = await bundle(inputMap, { fileMap });
for (const [output, source] of Object.entries(outputMap)) {
  await ensureFile(output);
  await Deno.writeTextFile(output, source);
}

// import * as Colors from "https://deno.land/std/fmt/colors.ts";
// import { emptyDir, ensureDir } from "https://deno.land/std/fs/mod.ts";
//
// const [source, destDir, destFile] = Deno.args;
//
// await ensureDir(destDir);
// await emptyDir(destDir);
//
// const [diagnostics, emit] = await Deno.bundle(source, undefined, {
//   lib: ["esnext", "es2017", "dom", "dom.iterable", "deno.ns"],
//   target: "esnext",
//   module: "esnext",
//   experimentalDecorators: true,
//   sourceMap: true,
// });
//
// if (diagnostics) {
//   console.log(Colors.red(JSON.stringify(diagnostics)));
//
//   throw Error("Diagnostics Error:\n");
// }
//
// const filePath = `${destDir}/${destFile}`;
// const data = new TextEncoder().encode(emit);
//
// await Deno.writeFile(filePath, data);
