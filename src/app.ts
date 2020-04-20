import { Server } from "@hapi/hapi";
import { routes } from "./routes/user.routes";

export const init = async () => {
    const server:Server = new Server({
        port:3000,
        host:'localhost'
    })
    
    //routes
    routes(server)

    await server.start()
    console.log('Server on port', 3000);
}