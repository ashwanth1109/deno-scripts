import { getFileContents } from "../utils/file.ts";

const fileName = Deno.args[0];

const fileContents = getFileContents(fileName);

console.log(fileContents);