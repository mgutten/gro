### Deploy
```
aws s3 sync ./build s3://www.trygro.com --delete --exclude "ss/*" --profile personal --region us-west-2 --acl public-read
aws s3 sync ./ss s3://www.trygro.com/ss --delete --profile personal --region us-west-2 --acl public-read
```
