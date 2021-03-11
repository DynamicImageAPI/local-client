export class Client {
    url: string;
    port: number;
    auth: string;



    constructor (url: string, port: number, auth: string) {
        this.url = url;
        this.port = port;
        this.auth = auth;
    }



    public uploadImageFromFile(path: string | Array<string>) {};

    public uploadImageFromURL(url: string | Array<string>) {};

    public uploadImage() {};
}



interface ImageData {
    image: string,
    tags: string[],
    subDir?: string,
    name: string,
    timeStamp?: string,
    photographer?: string,
    caption?: string
}