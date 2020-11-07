import * as cdk from "@aws-cdk/core";
import { AutoDeleteBucket } from "@mobileposse/auto-delete-bucket";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";

export class DeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const destinationBucket = new AutoDeleteBucket(this, "deno-scripts", {
      bucketName: "deno-scripts",
      publicReadAccess: true,
    });

    new BucketDeployment(this, "DeployWithInvalidation", {
      destinationBucket,
      sources: [Source.asset("../scripts")],
    });
  }
}
