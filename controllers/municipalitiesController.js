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

    for (let i = 0; i < data.length; i++) {
      data[i].features.A_CASA = undefined;
      data[i].features.A_HOSPITAL = undefined;
      data[i].features.A_HOSPITAL_UCI = undefined;
      data[i].features.Area_Km2 = undefined;
      data[i].features.DPTO_CCDGO = undefined;
      data[i].features.ETAREO_F = undefined;
      data[i].features.ETAREO_M = undefined;
      data[i].features.GlobalID = undefined;
      data[i].features.MPIO_CCDGO = undefined;
      data[i].features.MPIO_CCNCT = undefined;
      data[i].features.MPIO_CNMBR = undefined;
      data[i].features.OBJECTID = undefined;
      data[i].features.TOTAL_UNIDADES_PERSONAS_PROY_2020 = undefined;
      data[i].features.TOTAL_UNIDADES_Personas_en_gene = undefined;
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
