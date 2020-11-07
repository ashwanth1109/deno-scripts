import { copy } from "../dependencies.ts";

const input = Deno.args[0];
const output = Deno.args[1];

await copy(input, output, { overwrite: true });
