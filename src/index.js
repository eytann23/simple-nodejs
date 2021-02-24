const path = require('path')
const express = require ('express');
const cors = require ('cors');

const app = express();

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.use(cors());
app.use(express.json());


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})