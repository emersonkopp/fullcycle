FROM node:21

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget \
    && rm -rf /var/lib/apt/lists/*

COPY index.js .
COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]
