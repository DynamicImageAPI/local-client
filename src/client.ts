import {Image, PrimedImage} from "./image/image";

export class Client {
    port: number;
    url: string;
    auth: string;

    private _usePort: boolean = true;
    private _user: string;



    constructor (url: string, port: number, auth: string, options?: ClientOptions) {
        this.port = port;
        this.url = url;
        this.auth = auth;

        if (options) {
            if (options.user) {this._user = options.user;}
            if (options.usePort) {this._usePort = options.usePort;}
        }
    }



    public uploadImage(image: Image): ImageUploadRequestResult {
        let primedImage: PrimedImage = image.primeForUpload();
        if (this._user) {primedImage.user = this._user;}
        let temp: ImageUploadRequestResult; return temp;
    };


    public enablePort(): Client {
        this._usePort = true;
        return this;
    };

    public disablePort(): Client {
        this._usePort = false;
        return this;
    };

    public setUser(newUser: string): Client {
        this._user = newUser;
        return this;
    };

    public setPort(newPort: number): Client {
        this.port = newPort;
        return this;
    };

    public setURL(newURL: string): Client {
        this.url = newURL;
        return this;
    };

    get connection(): string {
        return `${this.url}${this._usePort ? `:${this.port}` : ''}`;
    };

    get portEnabled(): boolean {return this._usePort;};

    get currentUser(): string {return this._user;};

    //TODO idk whatever other shit
}

interface ClientOptions {
    usePort: boolean,
    user?: string
}

interface ImageUploadRequestResult {}