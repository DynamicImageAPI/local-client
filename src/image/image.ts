const fs = require('fs');

export class Image {
    source: string;
    name: string;
    tags: string[];
    photographer: string;
    category: string;
    subDir: string;
    APIDeleteOnUpload: boolean;

    private _image: string;



    constructor (source: string, imageName: string, tags: string[], otherOptions: {
        photographer?: string,
        category?: string,
        subDir?: string,
        APIDeleteOnUpload?: boolean
    }) {
        this.source = source;
        this.name = imageName;
        this.tags = tags;
        
        if (otherOptions) {
            if (otherOptions.photographer) {this.photographer = otherOptions.photographer;}
            if (otherOptions.category) {this.category = otherOptions.category;}
            if (otherOptions.subDir) {this.subDir = otherOptions.subDir;}
        }

        this.APIDeleteOnUpload = otherOptions && otherOptions.APIDeleteOnUpload ? otherOptions.APIDeleteOnUpload : false;
    }



    public toBase64(): Image {
        this._image = fs.readFileSync(this.source, {encoding: 'base64'});
        return this;
    }

    public primeForUpload(): PrimedImage {
        let primedImage: PrimedImage = {
            name: this.name,
            image: this._image,
            tags: this.tags,
            APIDeleteOnUpload: this.APIDeleteOnUpload
        };

        if (this.photographer) {primedImage.photographer = this.photographer;}
        if (this.category) {primedImage.category = this.category;}
        if (this.subDir) {primedImage.subDir = this.subDir;}

        return primedImage;
    }

    public getConvertedImage(): string {return this._image;}


    public setSource(source: string): Image {
        this.source = source;
        return this;
    }

    public setName(imageName: string): Image {
        this.name = imageName;
        return this;
    }

    public setPhotographer(photographer: string): Image {
        this.photographer = photographer;
        return this;
    }

    public setCategory(category: string): Image {
        this.category = category;
        return this;
    }

    public setSubDir(subDir: string): Image {
        this.subDir = subDir;
        return this;
    }

    public toggleDeletionOnUpload(): Image {
        this.APIDeleteOnUpload = !this.APIDeleteOnUpload;
        return this;
    }

    public setTags(tags: string[]): Image {
        this.tags = tags;
        return this;
    }

    public addTag(tag: string): Image {
        this.tags.push(tag);
        return this;
    }
}

export interface PrimedImage {
    name: string,
    image: string,
    tags: string[],
    photographer?: string,
    category?: string,
    subDir?: string,
    APIDeleteOnUpload: boolean,
    user?: string
}