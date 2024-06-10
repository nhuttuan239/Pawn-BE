var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "ok", data: "Hello Pawnshop" });
});

//AuthApi
const AuthApi = require("./auth.api");
router.use("/auth", AuthApi);

//UserApi
const UserApi = require("./user.api");
router.use("/users", UserApi);

//CustomerApi
const CustomerApi = require("./customer.api");
router.use("/customers", CustomerApi);

//Product Type Api
const PtypeApi = require("./ptype.api");
router.use("/ptypes", PtypeApi);

//InterestApi
const InterestApi = require("./interest.api");
router.use("/interests", InterestApi);

//ContractApi
const ContractApi = require("./contract.api");
router.use("/contracts", ContractApi);

module.exports = router;
