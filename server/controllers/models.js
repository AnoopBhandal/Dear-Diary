const Diary = require("../models/Model");

async function index (req, res){
    try{
        const entries = await Diary.getAll();
        res.status(200).json(entries)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function showYear (req, res){
    try{
        const year = parseInt(req.params.year) //Needs to be tuned
        const entries = await Diary.getByYear(year);
        res.status(200).json({entries})
    } catch (err){
        res.status(404).json({error: err.message})
    }
}

async function showMonth (req, res){
    try{
        const month = parseInt(req.params.month) //Needs to be tuned
        const entries = await Diary.getByMonth(month);
        res.status(200).json({entries})
    } catch (err){
        res.status(404).json({error: err.message})
    }
}

async function showDate (req, res){
    try{
        const year = parseInt(req.params.date) //Needs to be tuned
        const entries = await Diary.getByDate(date);
        res.status(200).json({entries})
    } catch (err){
        res.status(404).json({error: err.message})
    }
}


async function showCategory (req, res){
    try{
        const category = req.params.category //Needs to be tuned
        const entries = await Diary.getByCategory(category);
        res.status(200).json({entries})
    } catch (err){
        res.status(404).json({error: err.message})
    }
}

async function showID (req, res){
    try{
        const id = parseInt(req.params.id) //Needs to be tuned
        const entries = await Diary.getByID(id);
        res.status(200).json({entries})
    } catch (err){
        res.status(404).json({error: err.message})
    }
}


module.exports = {
    index, showYear, showMonth, showDate, showCategory, showID
}
