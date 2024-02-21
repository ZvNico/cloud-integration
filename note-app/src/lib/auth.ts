"use server";
import * as grpc from '@grpc/grpc-js';
import {AuthClient} from "./grpc-static/auth_grpc_pb";
import {
    AuthResponse,
    AuthRequest,
    RegisterResponse,
    VerifyTokenRequest,
    VerifyTokenResponse,
    RegisterRequest
} from "@/lib/grpc-static/auth_pb";

const client = new AuthClient(`${process.env.AUTH_SERVICE_URL}`, grpc.credentials.createInsecure());

export async function authenticate(username: string, password: string): Promise<string> {
    const request = new AuthRequest();
    request.setUsername(username);
    request.setPassword(password);
    return new Promise((resolve, reject) => {
        client.authenticate(request, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response.getToken());
            }
        });
    });
}

export async function register(username: string, password: string): Promise<number> {
    const request = new RegisterRequest();
    request.setUsername(username);
    request.setPassword(password);
    return new Promise((resolve, reject) => {
        client.register(request, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response.getUserid());
            }
        });
    });
}

export async function verifyToken(token: string): Promise<boolean> {
    const request = new VerifyTokenRequest();
    request.setToken(token);
    return new Promise((resolve, reject) => {
        client.verifyToken(request, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response.getIsvalid());
            }
        });
    });
}