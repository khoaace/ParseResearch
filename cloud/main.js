Parse.Cloud.define("hello", function(request) {
  console.log(request.params.MSSV);
  return "Hello world";
});

Parse.Cloud.define("getConcec", function(request) {
  const query = new Parse.Query("test1");
  return query
    .find({ useMasterKey: true })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
});

Parse.Cloud.define("luuConCec", function(request) {
  const test1 = Parse.Object.extend("test1");
  const testnew = new test1(); //  create new object
  testnew.set("name", request.params.name);
  testnew.set("count", request.params.count);
  return testnew.save({}, { useMasterKey: true }).then(
    testnew => {
      return "Success";
    },
    error => {
      return "Fail";
    }
  );
});

Parse.Cloud.define("updateConCec", function(request) {
  const test1 = Parse.Object.extend("test1");
  const query = new Parse.Query(test1);
  query
    .get("yjiiqX5jvD")
    .then(result => {
      result.set("count", "12"); // Update Object
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
});
