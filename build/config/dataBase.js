"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "jmhalire",
    "database": "dbveterinaria",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/models/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};
