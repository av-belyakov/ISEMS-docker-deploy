#!/bin/bash

USERNAME=admin
PWD="Ft345jFgk5a"
DIR=/home/mongo_dump_test

#выполнение данной команды нужно исключительно для наполнения БД тестовыми данными
sh -c `mongorestore --host=mongo:27017 --username ${USERNAME} --password ${PWD} ${DIR}/mongo_dump_isems-ui_test/`
sh -c `mongorestore --host=mongo:27017 --username ${USERNAME} --password ${PWD} ${DIR}/mongo_dump_isems-mrsict_test/`
