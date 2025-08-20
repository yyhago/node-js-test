const { Repository } = require("../models/index.js");

class RepositoryRepository {
  async findOrCreate({ where, defaults }) {
    return await Repository.findOrCreate({ where, defaults });
  }
}

module.exports = new RepositoryRepository();