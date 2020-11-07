import { ensureDir } from "./dependencies.ts";

await ensureDir("./dist");

const cmd = Deno.run({
  cmd: [
    "deno",
    "bundle",
    "--unstable",
    "./scripts/copy/index.ts",
    "dist/copy.js",
  ],
});

await cmd.status();
cmd.close();
