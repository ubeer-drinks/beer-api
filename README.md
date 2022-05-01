<h1 align="center">Beer API 🍻</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

Todo API in Express TS

## Install

```sh
$ npm install
```

## Usage

```sh
# Development mode
npm run start:dev

# Production mode
npm start
```

## Build

```
$ docker build -t ubeer-api:0.0.1 .
```

You can compare with unoptimized Dockerfile

```
$ docker build --target unoptimized -t ubeer-api:0.0.1-unoptimized .
$ docker images
REPOSITORY                                    TAG                 IMAGE ID       CREATED         SIZE
ubeer-api                                     0.0.1-unoptimized   3dd177e2d43b   2 minutes ago   1.04GB
ubeer-api                                     0.0.1               22c44bdf96c5   9 minutes ago   121MB
```

## Push to registry

```sh
# Gcloud configuration
$ gcloud auth login
$ gcloud config set account fabien.renaud@epsi.fr
$ gcloud config set project epsi-sandbox
$ gcloud auth configure-docker

# Push to registry
$ docker push gcr.io/epsi-sandbox/ubeer/beer-api:0.0.1
$ gcloud container images list
NAME
gcr.io/epsi-sandbox/ubeer

$ gcloud container images list-tags gcr.io/epsi-sandbox/ubeer/beer-api
DIGEST        TAGS          TIMESTAMP
c3b711736fdb  0.0.1,latest  2022-05-01T23:08:28
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to
check [issues page](https://github.com/ubeer-drinks/beer-api/issues).

## Show your support

Give a ⭐️ if this project helped you!
