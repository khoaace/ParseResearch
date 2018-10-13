var express = require("express");
var ParseServer = require("parse-server").ParseServer;
var ParseDashboard = require("parse-dashboard");

var app = express();

var applicationId = process.env.APP_ID || "ParseSampleAppId";
var masterKey = process.env.MASTER_KEY || "ParseSampleMasterKey";

var parseApi = new ParseServer({
  appName: "ParseSample",
  databaseURI: "mongodb://admin:Devilk01@ds231501.mlab.com:31501/textnote",
  cloud: "./cloud/main.js",
  appId: applicationId,
  masterKey: masterKey,
  clientKey: "clientKey",
  restAPIKey: "restAPI",
  serverURL: "http://localhost:1337/api",
  useNewUrlParser: true
});

var parseDashboard = new ParseDashboard({
  apps: [
    {
      serverURL: "http://localhost:1337/api",
      appId: applicationId,
      masterKey: masterKey,
      appName: "ParseSample"
    }
  ]
});

app.use("/api", parseApi);
app.use("/dashboard", parseDashboard);

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("ParseSample running on port " + port + ".");
});

module.exports = app;
