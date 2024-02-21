import {Metadata, sendUnaryData, ServerUnaryCall, ServerErrorResponse, status as Status} from '@grpc/grpc-js';
import bcrypt from 'bcrypt';
import {
    AuthRequest,
    AuthResponse,
    RegisterRequest,
    RegisterResponse,
    VerifyTokenRequest,
    VerifyTokenResponse
} from './grpc-static/auth_pb';
import {IAuthServer} from './grpc-static/auth_grpc_pb';
import prisma from "./prisma";
import jwt from 'jsonwebtoken';

export class AuthServer implements IAuthServer {

    private handleError(callback: sendUnaryData<any>, error: unknown, defaultMessage: string) {
        let serverError: ServerErrorResponse = {
            name: 'InternalError',
            code: Status.INTERNAL,
            message: error instanceof Error ? error.message : defaultMessage,
            metadata: new Metadata(),
        };
        callback(serverError, null);
    }

    async authenticate(call: ServerUnaryCall<AuthRequest, AuthResponse>, callback: sendUnaryData<AuthResponse>) {
        const {username, password} = call.request.toObject();
        try {
            const user = await prisma.user.findUnique({
                where: {
                    username: username,
                },
            });

            if (!user || !await bcrypt.compare(password, user.password)) {
                return callback(new Error('Invalid username or password'), null);
            }
            const userWithoutPassword = {
                id: user.id,
                username: user.username,
            }
            const token = jwt.sign(userWithoutPassword, 'your-secret-key');

            const response = new AuthResponse();
            response.setToken(token);
            callback(null, response);
        } catch (error: unknown) {
            this.handleError(callback, error, 'An error occurred during authentication.');
        }
    }

    async register(call: ServerUnaryCall<RegisterRequest, RegisterResponse>, callback: sendUnaryData<RegisterResponse>) {
        const {username, password} = call.request.toObject();
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword,
            },
        });
        try {
            const response = new RegisterResponse();
            response.setUserid(user.id);
            response.setMessage('Registration successful');
            callback(null, response);
        } catch (error: unknown) {
            this.handleError(callback, error, 'An error occurred during registration.');
        }
    }

    async verifyToken(call: ServerUnaryCall<VerifyTokenRequest, VerifyTokenResponse>, callback: sendUnaryData<VerifyTokenResponse>) {
        const {token} = call.request.toObject();
        try {
            jwt.verify(token, 'your-secret-key');

            const response = new VerifyTokenResponse();
            response.setIsvalid(true);
            callback(null, response);
        } catch (error: unknown) {
            this.handleError(callback, error, 'An error occurred during token verification.');
        }
    }
}