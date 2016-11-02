### Deploy
```
aws s3 sync . s3://www.trygro.com --delete --exclude "app/*" --exclude ".*" --profile personal --region us-west-2 --acl public-read
```
