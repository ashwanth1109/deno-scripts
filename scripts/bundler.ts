import { ensureDir } from "./dependencies.ts";

await ensureDir("./dist");

const bundleAssets = ["copy", "mdx-parser"];

for await (const asset of bundleAssets) {
  const cmd = Deno.run({
    cmd: [
      "deno",
      "bundle",
      "--unstable",
      `./scripts/${asset}/index.ts`,
      `dist/${asset}.js`,
    ],
  });

  await cmd.status();
  cmd.close();
}
