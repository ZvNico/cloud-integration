import {Server, ServerCredentials} from '@grpc/grpc-js';
import {AuthService} from "./grpc-static/auth_grpc_pb";
import {AuthServer} from "./service";

const server = new Server();

const authServer = new AuthServer();

// @ts-ignore
server.addService(AuthService, {
    authenticate: authServer.authenticate,
    register: authServer.register,
    verifyToken: authServer.verifyToken,
});

server.bindAsync(`0.0.0.0:${process.env.PORT}`, ServerCredentials.createInsecure(), () => {
    console.log('Server started');
});