const Kopi = require("../models/kopimodels");

exports.createKopi = async (req, res) => {
  const { namaKopi, harga, deskripsi } = req.body;

  const kopi = new Kopi({
    namaKopi,
    harga,
    deskripsi,
  });
  kopi
    .save()
    .then(() => {
      res.status(200).json({
        message: "Kopi created successfully!",
        data: Kopi,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

exports.readKopi = async (req, res) => {
  Kopi.find()
    .then((coffees) => {
      res.status(200).json({
        data: coffees,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

exports.deleteKopi = async (req, res) => {
  const { idKopi } = req.params;
  Kopi.findByIdAndDelete(idKopi)
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
  const { namaKopi, harga, deskripsi } = req.body;
  Kopi.findByIdAndUpdate(id, { namaKopi, harga, deskripsi })
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

exports.sortkopi = async (req, res) => {
  const { sortBy = "namaKopi", order = "asc" } = req.body;

  const sortOrder = order === "desc" ? -1 : 1;

  try {
    const kopis = await Kopi.find({}).sort({ [sortBy]: sortOrder });

    res.status(200).json({
      message: "Kopi sorted successfully!",
      data: kopis,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.filterKopi = async (req, res) => {
  const { hargaMin, hargaMax } = req.body;

  let filterQuery = {};

  if (hargaMin !== undefined && hargaMax !== undefined) {
    filterQuery.harga = { $gte: hargaMin, $lte: hargaMax };
  } else if (hargaMin !== undefined) {
    filterQuery.harga = { $gte: hargaMin };
  } else if (hargaMax !== undefined) {
    filterQuery.harga = { $lte: hargaMax };
  }

  try {
    const kopis = await Kopi.find(filterQuery);

    res.status(200).json({
      message: "Kopi filtered successfully!",
      data: kopis,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
