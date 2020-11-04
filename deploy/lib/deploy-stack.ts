import * as cdk from '@aws-cdk/core';
import { AutoDeleteBucket } from '@mobileposse/auto-delete-bucket';

export class DeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new AutoDeleteBucket(this, 'deno-scripts', {
      bucketName: 'deno-scripts'
    })
  }
}
