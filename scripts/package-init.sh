#!/usr/bin/env bash

NODE_VER=$(node -v)

if [[ "${NODE_VER}" != v14.* ]]; then
    echo "Wrong node version [${NODE_VER}]"
    echo "\n\n.... Try doing 'nvm use'."
    exit 1
fi

echo "Using node ${NODE_VER}"
