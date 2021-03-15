"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const fs = require('fs');
class Image {
    constructor(source, imageName, tags, otherOptions) {
        this.source = source;
        this.name = imageName;
        this.tags = tags;
        if (otherOptions) {
            if (otherOptions.photographer) {
                this.photographer = otherOptions.photographer;
            }
            if (otherOptions.category) {
                this.category = otherOptions.category;
            }
            if (otherOptions.subDir) {
                this.subDir = otherOptions.subDir;
            }
        }
        this.APIDeleteOnUpload = otherOptions && otherOptions.APIDeleteOnUpload ? otherOptions.APIDeleteOnUpload : false;
    }
    toBase64() {
        this._image = fs.readFileSync(this.source, { encoding: 'base64' });
        return this;
    }
    primeForUpload() {
        let primedImage = {
            name: this.name,
            image: this._image,
            tags: this.tags,
            APIDeleteOnUpload: this.APIDeleteOnUpload
        };
        if (this.photographer) {
            primedImage.photographer = this.photographer;
        }
        if (this.category) {
            primedImage.category = this.category;
        }
        if (this.subDir) {
            primedImage.subDir = this.subDir;
        }
        return primedImage;
    }
    getConvertedImage() { return this._image; }
    setSource(source) {
        this.source = source;
        return this;
    }
    setName(imageName) {
        this.name = imageName;
        return this;
    }
    setPhotographer(photographer) {
        this.photographer = photographer;
        return this;
    }
    setCategory(category) {
        this.category = category;
        return this;
    }
    setSubDir(subDir) {
        this.subDir = subDir;
        return this;
    }
    toggleDeletionOnUpload() {
        this.APIDeleteOnUpload = !this.APIDeleteOnUpload;
        return this;
    }
    setTags(tags) {
        this.tags = tags;
        return this;
    }
    addTag(tag) {
        this.tags.push(tag);
        return this;
    }
}
exports.Image = Image;
