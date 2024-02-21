// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_pb from "./auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticate: IAuthService_IAuthenticate;
    register: IAuthService_IRegister;
    verifyToken: IAuthService_IVerifyToken;
}

interface IAuthService_IAuthenticate extends grpc.MethodDefinition<auth_pb.AuthRequest, auth_pb.AuthResponse> {
    path: "/auth.Auth/Authenticate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AuthRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.AuthRequest>;
    responseSerialize: grpc.serialize<auth_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResponse>;
}
interface IAuthService_IRegister extends grpc.MethodDefinition<auth_pb.RegisterRequest, auth_pb.RegisterResponse> {
    path: "/auth.Auth/Register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<auth_pb.RegisterResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.RegisterResponse>;
}
interface IAuthService_IVerifyToken extends grpc.MethodDefinition<auth_pb.VerifyTokenRequest, auth_pb.VerifyTokenResponse> {
    path: "/auth.Auth/VerifyToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.VerifyTokenRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.VerifyTokenRequest>;
    responseSerialize: grpc.serialize<auth_pb.VerifyTokenResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.VerifyTokenResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    authenticate: grpc.handleUnaryCall<auth_pb.AuthRequest, auth_pb.AuthResponse>;
    register: grpc.handleUnaryCall<auth_pb.RegisterRequest, auth_pb.RegisterResponse>;
    verifyToken: grpc.handleUnaryCall<auth_pb.VerifyTokenRequest, auth_pb.VerifyTokenResponse>;
}

export interface IAuthClient {
    authenticate(request: auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    verifyToken(request: auth_pb.VerifyTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.VerifyTokenResponse) => void): grpc.ClientUnaryCall;
    verifyToken(request: auth_pb.VerifyTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.VerifyTokenResponse) => void): grpc.ClientUnaryCall;
    verifyToken(request: auth_pb.VerifyTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.VerifyTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authenticate(request: auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public verifyToken(request: auth_pb.VerifyTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.VerifyTokenResponse) => void): grpc.ClientUnaryCall;
    public verifyToken(request: auth_pb.VerifyTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.VerifyTokenResponse) => void): grpc.ClientUnaryCall;
    public verifyToken(request: auth_pb.VerifyTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.VerifyTokenResponse) => void): grpc.ClientUnaryCall;
}
