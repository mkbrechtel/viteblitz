#!/bin/sh
podman run -ti --rm -v .:/app --workdir /app node:18 yarn $@
