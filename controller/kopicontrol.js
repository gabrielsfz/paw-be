const { makeFilterKopi, makeSortKopi } = require("../helper/kopihelper");
const Kopi = require("../models/kopimodels");

exports.createKopi = async (req, res) => {
  const { nama, harga, deskripsi } = req.body;

  const kopi = new Kopi({
    nama,
    harga,
    deskripsi,
  });
  kopi
    .save()
    .then(() => {
      res.status(200).json({
        message: "Kopi created successfully!",
        data: kopi,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

exports.readKopi = async (req, res) => {
  try {
    const filterQuery = makeFilterKopi(req, res);
    const sortQuery = makeSortKopi(req, res);

    const coffees = await Kopi.find(filterQuery).sort(sortQuery);

    res.status(200).json({
      data: coffees,
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      error: err,
    });
  }
};

exports.deleteKopi = async (req, res) => {
  const { id } = req.params;
  Kopi.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        message: "Kopi deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

exports.updateKopi = async (req, res) => {
  const { id } = req.params;
  const { nama, harga, deskripsi } = req.body;
  Kopi.findByIdAndUpdate(id, { nama, harga, deskripsi })
    .then(() => {
      res.status(200).json({
        message: "Kopi updated successfully!",
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
