let axios = require("axios");

// ************States find ****************//
let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ "States Of India": data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

// *************** fetch Single distict of India********//

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getVaccineByDistict = async function (req, res) {
  try {
    let di = req.query.district_id;
    let d = req.query.date;
    let formatting = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${di}&date=${d}`,
    };
    let result = await axios(formatting);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

let getWeather = async function (req, res) {
  try {
    let q = req.query.q;
    let appid = req.query.appid;
    let formatting = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`,
    };
    let result = await axios(formatting);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

let getSortCity = async function (req, res) {
  try {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "London", "Kolkata","Chennai","Moscow"];
    let cityObjArray = [];
    for (i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };
      let resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2e605de6be326de648fb67b0407cbb9a`
      );

      console.log(resp.data.main.temp);
      obj.temp = resp.data.main.temp;
      cityObjArray.push(obj);
    }
    let sorted = cityObjArray.sort(function (a, b) {
      return a.temp - b.temp;
    });
    res.status(200).send({ status: true, data: sorted });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getVaccineByDistict = getVaccineByDistict;
module.exports.getWeather = getWeather;
module.exports.getSortCity = getSortCity;
