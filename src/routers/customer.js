const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController');

router.get("/", customerController.get_list_customer);
router.post("/create", customerController.create)
router.delete("/delete/:id", customerController.delete);
router.put("/edit/:id", customerController.edit);
 
module.exports = router;