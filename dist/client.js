"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(url, port, auth, options) {
        this._usePort = true;
        this.port = port;
        this.url = url;
        this.auth = auth;
        if (options) {
            if (options.user) {
                this._user = options.user;
            }
            if (options.usePort) {
                this._usePort = options.usePort;
            }
        }
    }
    uploadImage(image) {
        let primedImage = image.primeForUpload();
        if (this._user) {
            primedImage.user = this._user;
        }
        let temp;
        return temp;
    }
    ;
    enablePort() {
        this._usePort = true;
        return this;
    }
    ;
    disablePort() {
        this._usePort = false;
        return this;
    }
    ;
    setUser(newUser) {
        this._user = newUser;
        return this;
    }
    ;
    setPort(newPort) {
        this.port = newPort;
        return this;
    }
    ;
    setURL(newURL) {
        this.url = newURL;
        return this;
    }
    ;
    get connection() {
        return `${this.url}${this._usePort ? `:${this.port}` : ''}`;
    }
    ;
    get portEnabled() { return this._usePort; }
    ;
    get currentUser() { return this._user; }
    ;
}
exports.Client = Client;
