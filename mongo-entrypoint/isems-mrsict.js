
db.auth('admin', 'Ft345jFgk5a')
db = db.getSiblingDB('isems-mrsict');
db.createUser({
        user: "module-isems-mrsict",
        pwd: "vkL6Znj$Pmt1e1",
        roles: [ { role: "readWrite", db: "isems-mrsict"} ],
    });

