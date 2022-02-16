const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi')
})

//When calling localhost:3000/json the server must return a json object with the days of the week.

app.use("/json", (req, res, next) => {
  res.type('json')
  res.json({Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5, Sunday: 6})
  next();
})


//When calling localhost:3000/html the server must return a html page with the days of the week in a html table.

app.get("/html", (req, res, next) => {

  let obj = {Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5, Sunday: 6}

  let result = '<table>';
  for (let el in obj) {
    result += "<tr><td>" + el + "</td><td>" + obj[el] + "</td></tr>";
  }
  result += '</table>';
  res.send('<h1 = style="color:red"; align="center";">Days of the week \n</h1>' + result);
  next();
});

//when calling e.g. localhost:3000/html/2 
//the server should return a HTML page like before, 
//but only the row corresponding to the requested day should be shown

app.get("/html/:id", (req, res) => {
  let table = '<table = style="color:red";>';
  for (let el in req.weekday) {
    table += "<tr><td>" + el + "</td><td>" + req.weekday[el] + "</td></tr";
  }
  table += '</table>';
  res.send('<h1 = style="color:purple"; align="center";>A very colorful day of the week \n'+table);
})
const weekdays = [{Monday: 0}, {Tuesday: 1}, {Wednesday: 2}, {Thursday: 3}, {Friday: 4}, {Saturday: 5}, {Sunday: 6}]
app.param("id", (req, res, next, id) => {
  req.weekday = weekdays[id]
  next();
})

app.listen(3000)
