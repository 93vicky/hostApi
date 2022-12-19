const express = require("express");
const { getAllProduct, getAllTestingProduct } = require("../controllers/product-controller");
const router = express.Router();

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllTestingProduct);

module.exports = router;