export interface Fichier {
    Name: string;
    FileType: string;
    FileContent ?: string | ArrayBuffer;
    Content ?: string | ArrayBuffer;
}
