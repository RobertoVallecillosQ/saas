import * as pulumi from "@pulumi/pulumi";

// Load configuration values
const config = new pulumi.Config();
const appSyncID = config.require("appSyncID");
const dynamoID = config.require("dynamoID");
const graphQLEndpoint = config.require("graphQLEndpoint");
const identityPoolID = config.require("identityPoolID");
const userpoolClientID = config.require("userpoolClientID");
const userpoolID = config.require("userpoolID");

// Now you can use these values
console.log("AppSync ID:", appSyncID);
console.log("DynamoDB ID:", dynamoID);
console.log("GraphQL Endpoint:", graphQLEndpoint);
console.log("Identity Pool ID:", identityPoolID);
console.log("Userpool Client ID:", userpoolClientID);
console.log("Userpool ID:", userpoolID);
