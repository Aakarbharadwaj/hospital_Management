const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT 
// app.get('/',(req,res)=>{
//     res.send("hey")
// })
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = app;
