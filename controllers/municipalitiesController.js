const axios = require("axios");

exports.properties = async (req, res) => {
  try {
    let request = await axios.get(
      "https://opendata.arcgis.com/datasets/53beb24d21f146c38a42db63c92e3460_0.geojson"
    );

    let data = request.data.features;

    for (let i = 0; i < data.length; i++) {
      delete data[i].geometry;
      delete data[i].type;
    }

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
