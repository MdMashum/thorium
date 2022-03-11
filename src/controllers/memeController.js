const axios = require("axios");

const getMeme = async function (req, res) {
  try {
    let memeImage = {
      method: "get",
      url: `https://api.imgflip.com/get_memes`,
    };
    let result = await axios(memeImage);
    let data = result.data;
    res.status(200).send({ "Meme deatils": data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

let postMeme = async function (req, res) {
  try {
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let option = {
      method: "post",
      url: ` https://api.imgflip.com/caption_image?template_id=29562797&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
    };
    let result = await axios(option);
    res.send({ data: result.data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.getMeme = getMeme;

module.exports.postMeme = postMeme;
