import { Image } from "./image/image";
export declare class Client {
    port: number;
    url: string;
    auth: string;
    private _usePort;
    private _user;
    constructor(url: string, port: number, auth: string, options?: ClientOptions);
    uploadImage(image: Image): ImageUploadRequestResult;
    enablePort(): Client;
    disablePort(): Client;
    setUser(newUser: string): Client;
    setPort(newPort: number): Client;
    setURL(newURL: string): Client;
    get connection(): string;
    get portEnabled(): boolean;
    get currentUser(): string;
}
interface ClientOptions {
    usePort: boolean;
    user?: string;
}
interface ImageUploadRequestResult {
}
export {};
