run:
	docker run -d -v "/opt/_isems_docker_containers/logs:/home/logs" -v "/opt/_isems_docker_containers/isems-mrsict/keys:/home/keys" --name my_isems-mrsict.v1 my/isems-mrsict:v1
run-test:
	docker run -d --rm -v "/opt/_isems_docker_containers/logs:/home/logs" -v "/opt/_isems_docker_containers/isems-mrsict/keys:/home/keys" --name my_isems-mrsict.v1 my/isems-mrsict:v1
stop:
	docker stop my_isems-mrsict.v1
kill:
	docker rm my_isems-mrsict.v1