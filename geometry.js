const axios = require("axios");
const fs = require("fs");

const geometry = async () => {
  try {
    let request = await axios.get(
      "https://opendata.arcgis.com/datasets/53beb24d21f146c38a42db63c92e3460_0.geojson"
    );

    let data = request.data.features;

    for (let i = 0; i < data.length; i++) {
      delete data[i].properties;
    }

    await fs.writeFile(
      "./covid19-datacleaner/geometry.json",
      JSON.stringify(data),
      () => {
        console.log("Geometry file created!");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

geometry();
