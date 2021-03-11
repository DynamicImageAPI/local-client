export function checkExtension(fileOrPath: string) {
    let test: string;
    for (test of ['.png', '.jpg', '.gif', '.tiff', '.webp']) {
        if (!fileOrPath.endsWith(test)) {return false;}
    }
    return true;
}