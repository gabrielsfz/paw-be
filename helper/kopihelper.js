exports.makeFilterKopi = (req, res) => {
  const { hargaMin, hargaMax, nama } = req.query;

  let filterQuery = {};

  if (hargaMin !== undefined && hargaMax !== undefined) {
    filterQuery.harga = { $gte: hargaMin, $lte: hargaMax };
  } else if (hargaMin !== undefined) {
    filterQuery.harga = { $gte: hargaMin };
  } else if (hargaMax !== undefined) {
    filterQuery.harga = { $lte: hargaMax };
  }

  if (nama !== undefined) {
    filterQuery.nama = { $regex: nama, $options: "i" };
  }

  return filterQuery;
};

exports.makeSortKopi = (req, res) => {
  const { sortBy = "nama", order = "asc" } = req.query;
  const sortOrder = order === "desc" ? -1 : 1;

  let sortQuery = {};
  sortQuery[sortBy] = sortOrder;

  return sortQuery;
};
