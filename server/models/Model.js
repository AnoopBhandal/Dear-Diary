const db = require("../database/connect")

class Diary {
    constructor ({entry_id, title, content, date}){
        this.entry_id = entry_id
        this.title = title
        this.content = content
        this.date = date
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM entries;");
        if (response.rows.length === 0){
            throw new Error("There are no entries.")
        }
        return response.rows.map(e => new Diary(e));
    }


    static async getByYear(year){
        const response = await db.query("SELECT * FROM entries WHERE YEAR(date) = $1;", [year])
        if (response.rows.length === 0){
            throw new Error("There are no entries for selected year.")
        }
        return response
    }

    static async getByMonth(month){
        const response = await db.query("SELECT * FROM entries WHERE MONTH(date) = $1;", [month])
        if (response.rows.length === 0){
            throw new Error("There are no entries for selected month.")
        }
        return response
    }


    static async getByDate(year, month, day){
        const response = await db.query("SELECT * FROM entries WHERE YEAR(date) = $1 AND MONTH(date) = $2 and DAY(date) = $3", [year, month, date])
        if (response.rows.length === 0){
            throw new Error("There are no entries for selected date.")
        }
        return response
    }

    static async getByCategory(category){
        const response = await db.query("SELECT * FROM entries WHERE LOWER(category) = $1;", [category])
        if (response.rows.length === 0){
            throw new Error("There are no entries for selected category.")
        }
        return response
    }

    static async getByID(id){
        const response = await db.query("SELECT * FROM entries WHERE entry_id = $1;", [id])
        if (response.rows.length === 0){
            throw new Error("There are no entries for selected ID.")
        }
        return response
    }
}

module.exports = Diary;
