.PHONY: build run test-certs get-certs comment-ssl uncomment-ssl restart

# Build the Docker image
build:
	docker build -t my-nginx-image .

build-compose: 
	sudo docker compose -f docker-compose.prod.yml up -d

dhparam:
	openssl dhparam -out ../dhparam.pem 2048

# Run the Docker container
run:
	docker run -d --name my-nginx-container my-nginx-image

comment-ssl:
	sed -i -r 's/(listen .*443)/\1; #/g; s/(ssl_(certificate|certificate_key|trusted_certificate) )/#;#\1/g; s/(server \{)/\1\n    ssl off;/g' ../sites-available/ulvidamirli.com.conf ../sites-available/cms.ulvidamirli.com.conf

# Test obtaining SSL certificates from Let's Encrypt using Certbot
test-certs:
	sudo docker compose -f ../../docker-compose.prod.yml exec certbot -it sh -c 'certbot certonly --dry-run --webroot --webroot-path=/var/www/_letsencrypt -v --agree-tos --no-eff-email --register-unsafely-without-email --force-renewal \
    	-d ulvidamirli.com -d www.ulvidamirli.com -d cms.ulvidamirli.com'

test-cert:
	sudo docker compose -f ../../docker-compose.prod.yml run --rm  \
		certbot certonly \
		--webroot \
		--register-unsafely-without-email \
		--agree-tos \
		--webroot-path=/var/www/_letsencrypt/ \
		--dry-run \
		-v \
		-d ulvidamirli.com -d www.ulvidamirli.com -d cms.ulvidamirli.com

# Get SSL certificates inside the Docker container using Certbot
get-certs:
	docker exec -it my-nginx-container sh -c 'certbot certonly --standalone --agree-tos --no-eff-email \
	--email u.u.damirli@gmail.com \
	-d ulvidamirli.com -d www.ulvidamirli.com -d cms.ulvidamirli.com'

uncomment-ssl:
	sed -i -r -z 's/#?; ?#//g; s/(server \{)\n    ssl off;/\1/g' ../sites-available/ulvidamirli.com.conf ../sites-available/cms.ulvidamirli.com.conf

restart:
	docker restart my-nginx-container

# Remove the Docker container
clean:
	docker stop my-nginx-container
	docker rm my-nginx-container

# Remove the Docker image
clean-image:
	docker rmi my-nginx-image


# 1. dhparam al dockersiz
# ssl sozlerini comment-e al
# 2. certbot almagi yoxla
# 3. certbot al
# 4. 