/*
Exercise 4 for 5G00DM03-3005 Basics of Web Development
Author: Benny Cascarino
*/
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi')
})
//-----------------------Task 1-----------------------------------
app.use("/json", (req, res, next) => {
  res.type('json')
  res.json({Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5, Sunday: 6})
  next();
})

//-----------------------------------------------------------------
/*
I wasn't sure that on task 2 if it was the intention to use the json object from task 1
*/
//------------------------Task 2------------------------------------


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

//-----------------------------------------------------------------------


//------------------------Task 3------------------------------------------


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

//---------------------------------------------------------------------------
app.listen(3000)
