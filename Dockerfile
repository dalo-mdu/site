FROM ubuntu:latest


ENV NGINX_VERSION   %%NGINX_VERSION%%
ENV NJS_VERSION     %%NJS_VERSION%%
ENV PKG_RELEASE     %%PKG_RELEASE%%


RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get -qq install 

COPY app app

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]