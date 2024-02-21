#!/bin/bash

PROTO_DIR=./../proto
OUT_DIR=./src/grpc-static

dos2unix "$(readlink -f ./node_modules/.bin/protoc)"

# create the output directory if it does not exist
mkdir -p ${OUT_DIR}

# Generate  code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --grpc_out=grpc_js:${OUT_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR} \
    auth.proto

# Generate TypeScript code (d.ts)
yarn grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${OUT_DIR} \
    -I ./${PROTO_DIR} \
    auth.proto