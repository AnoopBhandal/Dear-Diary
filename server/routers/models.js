const { Router } = require("express")
const diaryController = require("../controllers/models")
const diaryRouter = Router();

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/?year", diaryController.showYear)
diaryRouter.get("/?month", diaryController.showMonth)
diaryRouter.get("/?date", diaryController.showDate)
diaryRouter.get("/?category", diaryController.showCategory)
diaryRouter.get("/:id", diaryController.showID)


module.exports = diaryRouter;
 