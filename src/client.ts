import {Image} from "./image";
import {checkExtension} from "./util/checkext";
import {FileNotExistsError, ImageFileExtensionError} from "./util/err/file";

const fs = require('fs');

export class Client {
    url: string;
    port: number;
    auth: string;



    constructor (url: string, port: number, auth: string) {
        this.url = url;
        this.port = port;
        this.auth = auth;
    }



    public uploadImageFromFile(path: string | Array<string>) {
        if (!Array.isArray(path)) {
            if (!fs.existsSync(path)) {throw new FileNotExistsError("The path provided does not lead to a valid file!");}
            if (!checkExtension(path)) {throw new ImageFileExtensionError("Your image extension must be .jpg, .png, .gif, .tiff, or .webp");}
            return this.uploadImage(new Image({type: 'file', source: path}));
        }
        else {
            let res = [];
            let cpath: string;
            for (cpath of path) {
                if (!fs.existsSync(path)) {throw new FileNotExistsError("The path provided does not lead to a valid file!");}
                if (!checkExtension(cpath)) {throw new ImageFileExtensionError("Your image extension must be .jpg, .png, .gif, .tiff, or .webp");}
                res.push(this.uploadImage(new Image({type: 'file', source: cpath})));
            }
            return res;
        }
    };

    public uploadImageFromURL(url: string | Array<string>) {

    };

    public uploadImage(image: Image) {};
}