#!/bin/sh

echo "Replace env value"

find /usr/share/build/static.js -type f | xargs sed -i "s@__REACT_APP_URL__@$REACT_APP_URL@g"
find /usr/share/build/static.js -type f | xargs sed -i "s@__REACT_APP_AUTHORITY__@$REACT_APP_AUTHORITY@g"

echo "Starting NGINX"
nginx -g 'daemon off;'