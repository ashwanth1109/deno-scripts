import { getFileContents } from "../utils/file.ts";

const fileName = Deno.args[0];

const fileContents = await getFileContents(fileName);

console.log(fileContents);
