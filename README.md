# Deno Scripts Repository

A repo to store all my general purpose scripts written in Deno.
The repo also contains CDK code to deploy my scripts and publish them as S3 assets, so that it can be used to run with Deno in my other repositories.

## Commands:

`npm run build` => builds all deno scripts from the "scripts" folder into the "dist" folder

`npm run deploy` => deploys the "dist" assets into the s3 bucket

## Scripts:

### Mdx Parser:

```shell script
deno run --allow-read https://deno-scripts.s3.amazonaws.com/mdx-parser.js ./README.md
```

## Outdated caches

If changes have been made to the script source, you must reload your cache as follows:

```shell script
deno cache https://deno-scripts.s3.amazonaws.com/mdx-parser.js --reload
```
