# Base image
FROM nginx:1.24.0

# Install Certbot dependencies
RUN apt-get update && apt-get install -y certbot

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Generate Diffie-Hellman keys
RUN openssl dhparam -out /etc/nginx/dhparam.pem 2048


    

# Expose ports
EXPOSE 80
EXPOSE 443

# Default command
CMD ["nginx", "-g", "daemon off;"]
