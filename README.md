# Deno Scripts Repository

A repo to store all my general purpose scripts written in Deno.
The repo also contains CDK code to deploy my scripts and publish them as S3 assets, so that it can be used to run with Deno in my other repositories.

## Commands:

`npm run build` => builds all deno scripts from the "scripts" folder into the "dist" folder

`npm run deploy` => deploys the "dist" assets into the s3 bucket
