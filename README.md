# Temp Commands
## Create tsconfig file
tsc --init
## Setup package.json
npm init
## Add Dependencies
npm i express dotenv
## Add Dev dependencies
npm i -D typescript @types/express @types/node ts-node nodemon rimraf eslint eslint-import-resolver-typescript
## Add to nodemon.json config file
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/server.ts"
}
## Add script to package.json
"build": "rimraf ./build && tsc",
"dev": "nodemon",
"start": "npm run build && node build/index.js"

## eslint init
npx eslint --init

## Add db dependencies
npm i pg sequelize

## Add dev dependencies
npm i -D @types/validator
