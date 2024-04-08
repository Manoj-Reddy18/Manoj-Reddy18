const express = require("express");



const app = express();



app.get("/", (request, response) => {

  const dateTime = new Date();

  response.send(

    `${dateTime.getDate()}-${dateTime.getMonth()}-${dateTime.getFullYear()}`

  );

});

app.listen(3000);

module.exports = app;