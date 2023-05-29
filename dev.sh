#!/bin/sh
podman run -ti --rm -v .:/app --workdir /app -p 5173:5173 node:18 yarn dev --host 0.0.0.0
