export const getFileContents = async (fileName: string) => {
  const file = await Deno.readFile(fileName);
  const decoder = new TextDecoder("utf-8");

  return decoder.decode(file);
};
