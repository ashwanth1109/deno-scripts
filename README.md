# Deno Scripts Repository

A repo to store all my general purpose scripts written in Deno.
The repo also contains CDK code to deploy my scripts and publish them as public assets in my S3 bucket (called 'deno-scripts'), so that it can be used to run with Deno in my other repositories.

Scripts currently added:

- Mdx Parser

## Commands:

`npm run deploy` => runs bundler to build scripts & deploys the "scripts" assets into the s3 bucket

## Scripts:

### Mdx Parser:

```shell script
deno run -A --unstable https://deno-scripts.s3.amazonaws.com/mdx-parser.ts ../content/
```

Note `content` is the directory where you store your markdown files.
The generated files will be output to `./src/auto-generated/` from the root of where you run the deno command.

#### Outdated caches

If changes have been made to the script source, you must reload your cache as follows:

```shell script
deno cache https://deno-scripts.s3.amazonaws.com/mdx-parser.js --reload
```

#### Developer Note

The mdx parser is a custom markdown parser that converts markdown documents into React components.
The parser lets you add videos among other standard markdown capabilities to your markdown files which generate the appropriate static content. The idea is to extend the parser to support other kinds of react components to be rendered on the blog site. Since content is pre-compiled before deployment, there is compilation required client side which is the preferred approach to writing content in markdown and having that displayed on blog sites.

This is a very crude implementation done in ~ one day and is not extensible, nor is it efficient.
It works though, but possibly may require minor bug fixes. Since this is used as a static web page generator in the pre-compilation step, we dont really care about optimizations at the moment as any additional time taken happends during the build step before deployment. It currently takes 5-10 seconds to run, hence, I will be refactoring the entire parser sometime in the future when I have nothing else on my plate. The only concern with the code mess at the moment is that maintainability will be an issue, so we must refactor before adding significant capability to this.
