module.exports = function (router, con) {

    router.get('/select/:username', function (req, res, next) {
        var username = req.params.username;
        var query = 'select * from users where username=' + username;
        con.query(query,function (error, result) {

            if (error) {
                console.log(error);
                res.send("unsuccessfull select from user");
            }
            else {
                res.json(result);
            }

        });

    });
};

