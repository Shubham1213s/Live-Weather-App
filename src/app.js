const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { error } = require('console');
const port = process.env.PORT || 3000

// Give public folder path ---> this will only run static public folder files
const public_folderPath = path.join(__dirname, '../public')

// console.log(path.join(__dirname, '../public'))

// give templates folder path so that it will use views folder
const template_Path = path.join(__dirname, '../templates/views')

// give partial folder path inside the templates folder so that it will use partilas folder
const partials_path = path.join(__dirname, '../templates/partials')

//this will set template engine as hbs
app.set('view engine', 'hbs');

//this will use template folder as view engine 
app.set('views', template_Path)

hbs.registerPartials(partials_path)

// express built in middleware
app.use(express.static(public_folderPath))  


// routing
// app.get("/", (req, res)=>{
//     res.send("Welcome to my project - Live temperature")

// })

// app.get("/about", (req, res)=>{
//     res.send("Welcome to about us page - Live temperature")

// })

// app.get("/weather", (req, res)=>{
//     res.send("Showing Live temperature")

// })

// app.get("*", (req, res)=>{
//     res.send("404 error page")

// })


app.get("/", (req, res)=>{
    res.render("index")

})

app.get("/about", (req, res)=>{
    res.render("about")

})

app.get("/weather", (req, res)=>{
    res.render("weather")

})


//this route is used for error page and it will send dynamic msg to the error page
app.get("*", (req, res)=>{
    res.render("404", {
        errorMsg: 'Opps! Page Not Found'
    })
})

app.listen(port, ()=>{
    console.log(`App is running on ${port} port`)
})