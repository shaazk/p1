class User {
    static getUser(req, res){
        const { name, age, country } = req.body;
        return res.status(200).json({
            status: 200,
            name,
            age,
            country
        })
    }
}

export default User;