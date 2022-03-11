
const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemeController = require("../controllers/memeController")

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/vaccineInDistict",CowinController.getVaccineByDistict)
router.get("/weather" , CowinController.getWeather)
router.get("/sortcities" , CowinController.getSortCity)
router.get("/memedeatils",MemeController.getMeme)
router.post("/postmeme",MemeController.postMeme)






module.exports = router;
