# Deno Scripts Repository

A repo to store all my general purpose scripts written in Deno.
The repo also contains CDK code to deploy my scripts and publish them as public assets in my S3 bucket (called 'deno-scripts'), so that it can be used to run with Deno in my other repositories.

## Commands:

`npm run deploy` => deploys the "scripts" assets into the s3 bucket

## Scripts:

### Mdx Parser:

```shell script
deno run --allow-read https://deno-scripts.s3.amazonaws.com/mdx-parser/index.ts ./README.md
```

#### Outdated caches

If changes have been made to the script source, you must reload your cache as follows:

```shell script
deno cache https://deno-scripts.s3.amazonaws.com/mdx-parser/index.ts --reload
```

#### Developer Note

The mdx parser is a custom markdown parser that converts markdown documents into React components.
This is a very crude implementation done in one day and is not extensible, nor is it efficient.
It works though, but possibly may require minor bug fixes. Since this is used as a static web page generator in the pre-compilation step, we dont really care about optimizations at the moment.

Hence, I will be refactoring the entire parser sometime in the future when I have nothing else on my plate.
