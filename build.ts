// Bundle all deno scripts using bundler.ts

import * as Colors from "https://deno.land/std/fmt/colors.ts";

for await (const dir of Deno.readDir("./scripts")) {
  if (dir.isDirectory) {
    for await (const file of Deno.readDir(`./scripts/${dir.name}`)) {
      // we only want to build index.ts files, which will comprise all the necessary modules
      if (file.isFile && file.name === "index.ts") {
        console.log(
          `${Colors.yellow("Bundling script: ")}scripts\\${dir.name}\\index.ts`
        );

        const p = Deno.run({
          cmd: [
            "deno",
            "run",
            "--unstable",
            "-A",
            "bundler.ts",
            `scripts\\${dir.name}\\index.ts`,
            `dist`,
            `${dir.name}.js`,
          ],
        });

        await p.status();
        p.close();
      }
    }
  }
}

console.log("\n" + Colors.green("Bundling complete . . ."));
