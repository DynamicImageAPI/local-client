export declare class Image {
    source: string;
    name: string;
    tags: string[];
    photographer: string;
    category: string;
    subDir: string;
    APIDeleteOnUpload: boolean;
    private _image;
    constructor(source: string, imageName: string, tags: string[], otherOptions: {
        photographer?: string;
        category?: string;
        subDir?: string;
        APIDeleteOnUpload?: boolean;
    });
    toBase64(): Image;
    primeForUpload(): PrimedImage;
    getConvertedImage(): string;
    setSource(source: string): Image;
    setName(imageName: string): Image;
    setPhotographer(photographer: string): Image;
    setCategory(category: string): Image;
    setSubDir(subDir: string): Image;
    toggleDeletionOnUpload(): Image;
    setTags(tags: string[]): Image;
    addTag(tag: string): Image;
}
export interface PrimedImage {
    name: string;
    image: string;
    tags: string[];
    photographer?: string;
    category?: string;
    subDir?: string;
    APIDeleteOnUpload: boolean;
    user?: string;
}
