
db.auth('admin', 'Ft345jFgk5a')
db = db.getSiblingDB('isems-ui');
db.createUser({
        user: "module-isems-ui",
        pwd: "jkdds7dfm0",
        roles: [ { role: "readWrite", db: "isems-ui"} ],
    });

