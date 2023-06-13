.PHONY: build run test-certs get-certs comment-ssl uncomment-ssl restart

get-dhparam:
	openssl dhparam -out ../dhparam.pem 2048

comment-ssl:
	sed -i -r 's/(listen .*443)/\1; #/g; s/(ssl_(certificate|certificate_key|trusted_certificate) )/#;#\1/g; s/(server \{)/\1\n    ssl off;/g' ./sites-available/*

build-compose: 
	sudo docker compose -f ../docker-compose.prod.yml up -d

# Test obtaining SSL certificates from Let's Encrypt using Certbot
test-certs:
	sudo docker compose -f ../../docker-compose.prod.yml run --rm  \
		certbot certonly \
		--dry-run \
		--agree-tos \
		--no-eff-email \
		--register-unsafely-without-email \
		--webroot \
		--webroot-path=/var/www/_letsencrypt/ \
		-v \
		-d ulvidamirli.com -d www.ulvidamirli.com -d cms.ulvidamirli.com

# Get SSL certificates inside the Docker container using Certbot
get-certs:
	sudo docker compose -f ../../docker-compose.prod.yml run --rm  \
		certbot certonly \
		--agree-tos \
		--no-eff-email \
		--webroot \
		--webroot-path=/var/www/_letsencrypt/ \
		-v \
		--force-renewal \
		--email u.u.damirli@gmail.com \
		-d ulvidamirli.com -d www.ulvidamirli.com -d cms.ulvidamirli.com

uncomment-ssl:
	sed -i -r -z 's/#?; ?#//g; s/(server \{)\n    ssl off;/\1/g' ./sites-available/ulvidamirli.com.conf ./sites-available/cms.ulvidamirli.com.conf
