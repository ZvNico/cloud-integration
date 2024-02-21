// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_auth_AuthRequest(arg) {
  if (!(arg instanceof auth_pb.AuthRequest)) {
    throw new Error('Expected argument of type auth.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AuthRequest(buffer_arg) {
  return auth_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_AuthResponse(arg) {
  if (!(arg instanceof auth_pb.AuthResponse)) {
    throw new Error('Expected argument of type auth.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AuthResponse(buffer_arg) {
  return auth_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RegisterRequest(arg) {
  if (!(arg instanceof auth_pb.RegisterRequest)) {
    throw new Error('Expected argument of type auth.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RegisterRequest(buffer_arg) {
  return auth_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RegisterResponse(arg) {
  if (!(arg instanceof auth_pb.RegisterResponse)) {
    throw new Error('Expected argument of type auth.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RegisterResponse(buffer_arg) {
  return auth_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_VerifyTokenRequest(arg) {
  if (!(arg instanceof auth_pb.VerifyTokenRequest)) {
    throw new Error('Expected argument of type auth.VerifyTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_VerifyTokenRequest(buffer_arg) {
  return auth_pb.VerifyTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_VerifyTokenResponse(arg) {
  if (!(arg instanceof auth_pb.VerifyTokenResponse)) {
    throw new Error('Expected argument of type auth.VerifyTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_VerifyTokenResponse(buffer_arg) {
  return auth_pb.VerifyTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  authenticate: {
    path: '/auth.Auth/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AuthRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_auth_AuthRequest,
    requestDeserialize: deserialize_auth_AuthRequest,
    responseSerialize: serialize_auth_AuthResponse,
    responseDeserialize: deserialize_auth_AuthResponse,
  },
  register: {
    path: '/auth.Auth/Register',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RegisterRequest,
    responseType: auth_pb.RegisterResponse,
    requestSerialize: serialize_auth_RegisterRequest,
    requestDeserialize: deserialize_auth_RegisterRequest,
    responseSerialize: serialize_auth_RegisterResponse,
    responseDeserialize: deserialize_auth_RegisterResponse,
  },
  verifyToken: {
    path: '/auth.Auth/VerifyToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.VerifyTokenRequest,
    responseType: auth_pb.VerifyTokenResponse,
    requestSerialize: serialize_auth_VerifyTokenRequest,
    requestDeserialize: deserialize_auth_VerifyTokenRequest,
    responseSerialize: serialize_auth_VerifyTokenResponse,
    responseDeserialize: deserialize_auth_VerifyTokenResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
