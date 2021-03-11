import {parse} from './imageParser/parser';

export class Image {
    private sourceType: "url" | "base64" | "file";
    private source: string;
    private base64: string = null;
    


    constructor (source: {type: "url" | "base64" | "file", source: string}) {
        this.sourceType = source.type;
        this.source = source.source;
        if (source.type !== "base64") {this.base64 = this.encode(this.source);}
    }



    public encode(source?: string): string {
        return parse(source || this.source);
    };

    get encoded(): string {return this.encode(this.source);};

    get imageSource(): {type: string, source: string} {return {type: this.sourceType, source: this.source};}
}

export interface ImageData {
    image: string,
    tags: string[],
    subDir?: string,
    name: string,
    timeStamp?: string,
    photographer?: string,
    caption?: string
}