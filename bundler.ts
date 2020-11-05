import * as Colors from "https://deno.land/std/fmt/colors.ts";
import { emptyDir, ensureDir } from "https://deno.land/std/fs/mod.ts";

const [source, destDir, destFile] = Deno.args;

await ensureDir(destDir);
await emptyDir(destDir);

const [diagnostics, emit] = await Deno.bundle(source, undefined, {
  lib: ["esnext", "es2017", "dom", "dom.iterable", "deno.ns"],
  target: "es2015",
  module: "es2015",
  experimentalDecorators: true,
  sourceMap: true,
});

if (diagnostics) {
  console.log(Colors.red(JSON.stringify(diagnostics)));

  throw Error("Diagnostics Error:\n");
}

const filePath = `${destDir}/${destFile}`;
const data = new TextEncoder().encode(emit);

await Deno.writeFile(filePath, data);
