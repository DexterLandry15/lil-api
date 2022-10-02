const Query = require("minecraft-query");

const q = new Query({host: '127.0.0.1', port: 25565, timeout: 7500});


async function get_server() {
    q.fullStat()
  .then(success => {

    return success;
    q.close();
  })

}
module.exports = get_server