const { Router } = require("express")
const diaryController = require("../controllers/models")
const diaryRouter = Router();

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/?year", diaryController.showYear)
diaryRouter.get("/?month", diaryController.showMonth)
diaryRouter.get("/?date", diaryController.showDate)
diaryRouter.get("/?category", diaryController.showCategory)
diaryRouter.get("/:id", diaryController.showID)
diaryRouter.post("/", diaryController.create)
diaryRouter.patch("/:id", diaryController.updateEntry)
diaryRouter.delete("/:id", diaryController.destroy)

module.exports = diaryRouter;
 