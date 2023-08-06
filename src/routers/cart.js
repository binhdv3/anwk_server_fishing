const express = require('express')
const router = express.Router()
const cartController = require('../controller/cartController');

router.get("/", cartController.get_list_cart);
router.post("/create", cartController.create)
router.delete("/delete/:id", cartController.delete);
router.put("/edit/:id", cartController.edit);
 
module.exports = router;