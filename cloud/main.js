const parseTemplateCloud = require("./modules/parse-template");

Parse.Cloud.define("getObjects", parseTemplateCloud.getObjects);
Parse.Cloud.define("saveObject", parseTemplateCloud.saveObject);
Parse.Cloud.define("updateObject", parseTemplateCloud.updateObject);
Parse.Cloud.define("deleteObject", parseTemplateCloud.deleteObject);
