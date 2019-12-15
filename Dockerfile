FROM node:12-alpine
RUN apk add git
WORKDIR /workspaces/lib-pn
CMD ["sh"]