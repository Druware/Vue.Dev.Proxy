FROM nginx
COPY ./wwwroot/ /usr/share/nginx/html/
COPY ./config/* /etc/nginx/conf.d/
