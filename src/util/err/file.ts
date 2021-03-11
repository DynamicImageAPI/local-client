export class FileNotExistsError extends Error {
    constructor (message: string) {super(message);}
}

export class ImageFileExtensionError extends Error {
    constructor (message: string) {super(message);}
}