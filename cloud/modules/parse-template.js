const parseTemplate = {};

//Declare Class
const test1 = Parse.Object.extend("test1");

Test.getObjects = function(request) {
  const query = new Parse.Query(test1);
  //get all data in class
  return query
    .find({ useMasterKey: true })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

Test.saveObject = function(request) {
  const testnew = new test1(); //  create new object
  testnew.set("name", "New Object");
  testnew.set("count", 10);
  return testnew.save({}, { useMasterKey: true }).then(
    testnew => {
      return "Success";
    },
    error => {
      return error;
    }
  );
};

Test.updateObject = function(request) {
  const query = new Parse.Query(test1);
  return query
    .get("kv1ESG9tFq", { useMasterKey: true })
    .then(result => {
      result.set("count", "13"); // Update Object
      return result
        .save({}, { useMasterKey: true })
        .then(result => {
          return "Success";
        })
        .catch(error => {
          return error;
        });
    })
    .catch(error => {
      return error;
    });
};

Test.deleteObject = function(request) {
  const query = new Parse.Query(test1);
  return query
    .get("JVS4PqfbHB", { useMasterKey: true })
    .then(result => {
      result
        .destroy({ useMasterKey: true }) // Delete Object
        .then(result => {
          return "Success";
        })
        .catch(error => {
          return error;
        });
    })
    .catch(error => {
      return error;
    });
};

Test.sample = function(request) {};

module.exports = parseTemplate;
