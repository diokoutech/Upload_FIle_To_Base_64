export interface Fichier {
    Name: string;
    FileType: string;
    FileContent ?: string;
    Content ?: string | ArrayBuffer;
}
