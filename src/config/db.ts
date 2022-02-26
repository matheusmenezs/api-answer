import { createConnection } from "typeorm";

export const connectBD = async () => {
    const connection = await createConnection();
    console.log(`Connection established with database ${connection.options.database}`);

    process.on('SIGINT', () => {
        connection.close().then(() => console.log(`Database connection was closed`))
    });
}