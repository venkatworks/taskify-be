"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.DB_CONNECTION_URI);
const DBConnection = async () => {
    try {
        await client.connect();
        client.db(process.env.DB_NAME);
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
};
exports.DBConnection = DBConnection;
