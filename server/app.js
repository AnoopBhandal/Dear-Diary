const express = require('express');
const cors = require('cors');
const diaryRouter = require('./routers/models');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.json({
        title: "Diary",
        description: "Diary entries"
    })
})


app.use('/diaries', diaryRouter);

module.exports = app;
