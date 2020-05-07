db.createUser(
    {
        user: "moussa",
        pwd: "keunzeune",
        roles: [
            {
                role: "readWrite",
                db: "tuto-docker-db"
            }
        ]
    }
);
