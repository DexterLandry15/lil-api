const Query = require("minecraft-query");

const q = new Query({ host: "94.130.52.204", port: 45689, timeout: 1000 });

async function get_server() {
	let data;
	await q.fullStat()
		.then((res) => {
			data = res;
		})
		.catch((err) => {
			console.log(err);
		});
	return data;
}
module.exports = get_server;