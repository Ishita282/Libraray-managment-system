const express = require ("express");
const userRoute = require("./routes/userRoute")
const bookRoute = require("./routes/bookRoute")

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome..."
    })
});

app.use('/users', userRoute);
app.use('/books', bookRoute)


// app.all('*', (req,res) =>{
//     res.status(500).json({
//         message: "Not Build yet"
//     })
// })

const PORT = 8081;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})