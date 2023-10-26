class UserController {
	async index(req, res){}

	async create(req, res){
		var { email, name, password } = req.body;

		if(email == undefined){
			res.status(400);
			res.json({err: "Invalid email..."})
		}
		res.status = 200;
		res.send(req.body)
	}
}

module.exports = new UserController();