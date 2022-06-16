FROM nginx:latest

ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./build /usr/share/build

COPY nginx-config/nginx.conf /etc/nginx/
COPY nginx-config/default.conf /etc/nginx/conf.d/

RUN chgrp -R root /var/cache/nginx /var/run /dev/stdout && \
    chmod -R 777 /var/cache/nginx /var/run /dev/stdout

EXPOSE 80

COPY ./entrypoint.sh /
RUN chmod a+x /entrypoint.sh

CMD ["/entrypoint.sh"]
