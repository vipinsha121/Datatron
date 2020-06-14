# website-react
---
This is Datatron's website project.
Please check the live site [here](https://www.datatron.com/).

## How to run this project?
This is a `create-react-app` project. 

### Prerequisities:
1. Node (> v.11.4.0)
2. nvm ( Node Version Manager )
  
### Run locally
```
$ nvm use
$ npm install
$ npm start
```

Then you should be able to see the project running on `localhost:3000`.

## How to deploy this project?
We will deploy this app on `aws s3`.

### Prerequisities
1. AWS account.
2. Need to install `aws cli` on your local machine.

[How to install aws cli using homebrew on mac?](https://www.code2bits.com/how-to-install-awscli-on-macos-using-homebrew/)

### How to deploy?

1. Create S3 bucket for hosting static website. ([ref](https://medium.com/serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6))
2. Replace S3 bucket name in `package.json`.
```
"scripts": {
   ...
   "deploy": "aws s3 sync build/ s3://datatron-frontend --acl public-read"
}
```
You need to replace `datatron-frontend` with your own S3 bucket name.

3. Run this command on terminal.
```
$ nvm use
$ npm run build
$ npm run deploy
```
