# Refresh token sample

This is a small app designed to show how you can work with refresh tokens using Auth0.

# Building / Runnning

This is built on Create React App and is only meant to be run locally as a POC.

`npm i`
`npm start`

# UI

# Rule

There is a rule in the `rule.js` file. This rule code needs to be manually deployed

# Auth0

Create an app and an API. put the relevant data into the `auth0Client.ts` file.

In Auth0 if you want to get a refresh toekn make sure that the refresh token behaviour in your app is set to rotating.
