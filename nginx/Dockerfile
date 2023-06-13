FROM nginx:1.24.0 AS base
EXPOSE 80

FROM base AS production
EXPOSE 443

# Install cerbot
RUN apt-get update && \
    apt-get install -y --no-install-recommends certbot

RUN rm /etc/nginx/conf.d/default.conf

# Show nginx prod config
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./sites-available /etc/nginx/sites-available
COPY ./sites-enabled /etc/nginx/sites-enabled
COPY ./nginxconfig /etc/nginx/nginxconfig

VOLUME [ "/var/log/nginx", "/etc/letsencrypt", "/var/www/certbot" ]

# Generate Diffie-Hellman keys
RUN openssl dhparam -out /etc/nginx/dhparam.pem 2048

# Comment out SSL related directives in the configuration
RUN sed -i -r 's/(listen .*443)/\1; #/g; s/(ssl_(certificate|certificate_key|trusted_certificate) )/#;#\1/g; s/(server \{)/\1\n    ssl off;/g' /etc/nginx/sites-available/ulvidamirli.com.conf /etc/nginx/sites-available/cms.ulvidamirli.com.conf

# Reload your NGINX server
# RUN sudo nginx -t && sudo systemctl reload nginx

# Create the Certbot directory
RUN mkdir -p /var/www/certbot

# Obtain SSL certificates from Let's Encrypt using Certbot
RUN certbot certonly --dry-run --webroot --webroot-path=/var/www/certbot/ -v -d ulvidamirli.com -d www.ulvidamirli.com -d cms.ulvidamirli.com --email u.u.damirli@gmail.com --agree-tos --force-renewal

# Uncomment SSL related directives in the configuration
RUN sed -i -r -z 's/#?; ?#//g; s/(server \{)\n    ssl off;/\1/g' /etc/nginx/sites-available/ulvidamirli.com.conf /etc/nginx/sites-available/cms.ulvidamirli.com.conf

# Reload your NGINX server
# RUN sudo nginx -t && sudo systemctl reload nginx

# Configure Certbot to reload NGINX when it successfully renews certificates
# RUN echo -e '#!/bin/bash\nnginx -t && systemctl reload nginx' | sudo tee /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh
# RUN sudo chmod a+x /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh

# Reload NGINX to load in your new configuration
# RUN sudo nginx -t && sudo systemctl reload nginx



FROM base AS development

COPY ./development.conf /etc/nginx/conf.d/default.conf
