### Deploy
```
aws s3 sync ./build s3://www.trygro.com --delete --profile personal --region us-west-2 --acl public-read
aws s3 sync ./static s3://www.trygro.com/static --delete --profile personal --region us-west-2 --acl public-read
```
