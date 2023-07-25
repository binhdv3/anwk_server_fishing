const express = require('express')
const router = express.Router()
const accountController = require('../controller/accountController');

router.get("/", accountController.get_list_account);
router.post("/create", accountController.create)
router.delete("/delete/:id", accountController.delete);
router.put("/edit/:id", accountController.edit);
 
module.exports = router;