# Gro MVP

### Problem
When you think hair loss, you probably picture either a Patrick Stewart look-alike or a greasy combover.  You might be surprised to hear that women account for the majority of topical hair loss purchases in the U.S. (spending $1.4B of the $2.5B industry).  Of over-the-counter solutions, shampoo is the #1 seller by a landslide.  

"But those shampoos must exist!", you yell into your monitor. They do, but they are limited to a niche affiliate product market aggressively promoting clinical function over style - they print big, bold "HAIR LOSS PREVENTION SHAMPOO" on the front without consideration for hair type or special needs (dandruff, color protection, etc).  Women with thinning hair must then choose: use a functional product and lose the hair style they've had for years or protect their style with traditional shampoos but risk losing more hair.

### Solution
Why choose?  Gro is a personalized hair growth shampoo tailored to each customer.  Customers craft their perfect shampoo to match their hair style, while still benefiting from the hair loss prevention of traditional formulas.

### The MVP
Smoke test acquisition path to test USP and market response from women across various channels.

## The Tech

### Deploy
```
aws s3 sync ./build s3://www.trygro.com --delete --exclude "ss/*" --profile personal --region us-west-2 --acl public-read
aws s3 sync ./ss s3://www.trygro.com/ss --delete --profile personal --region us-west-2 --acl public-read
```

### Stack
Built with a combination of React/Redux, static HTML/CSS/JS, Firebase, S3, and GA.
