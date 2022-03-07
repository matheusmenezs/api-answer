import { app } from "./app";

const port = 3000;
const server = app.listen(port, () => console.log(`App Listening in port: 3000`));

process.on('SIGINT', () => {
    server.close();
    console.log(`App connection closed`)
})