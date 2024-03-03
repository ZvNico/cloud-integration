# Auth Service

Auth Service is a service that provides authentication and authorization for the Note App. It is a GRPC server that
handle register, login and token validation of users. It is built using Node.js and grpc.

## Running the application with Docker and Docker Compose

### Prerequisites

- Docker (for Docker method)
- Docker Compose (for Docker method)

### Installation

1. Clone the repository:

 ```bash
git clone https://github.com/ZvNico/cloud-integration.git
```

2. Move into the `auth-service` directory:

```bash
cd cloud-integration/auth-service
```

### Running the application

```bash
docker compose up
```

## Running the application with node

### Prerequisites

- Node.js
- Yarn or npm

### Installation using yarn

1. Clone the repository:

 ```bash
git clone https://github.com/ZvNico/cloud-integration.git
```

2. Move into the `note-app` directory:

```bash
cd cloud-integration/auth-service
```

3. Install the dependencies:

```bash
yarn install
```

4. Build the application:

```bash
yarn build
```

### Running the application

```bash
yarn start
```