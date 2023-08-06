const express = require('express')
const router = express.Router()
const oderController = require('../controller/oderController');

router.get("/", oderController.get_list_oder);
router.post("/create", oderController.create)
router.delete("/delete/:id", oderController.delete);
router.put("/edit/:id", oderController.edit);
 
module.exports = router;