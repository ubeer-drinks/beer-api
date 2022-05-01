# DONT USE THIS IN PRODUCTION - SAMPLE ONLY
# FROM node:16 AS unoptimized
# WORKDIR /app
# COPY . .
# RUN ["npm", "install"]
# RUN ["npm", "run", "build"]
# ENTRYPOINT ["npm", "start"]

FROM node:16.15.0-alpine AS base
WORKDIR /app
COPY package*.json .

FROM base AS build
RUN ["npm", "install"]
COPY . .
RUN ["npm", "run", "build"]

FROM base AS prod
RUN ["npm", "ci", "--production"]
COPY --from=build /app/build /app/build
ENTRYPOINT ["npm", "start"]
