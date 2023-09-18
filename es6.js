const figlet = require("figlet");

figlet("Hi Luciano", function (err, data) {
  if (err) {
    console.log("errore");
    console.dir(err);
    return;
  }
  console.log(data);
});