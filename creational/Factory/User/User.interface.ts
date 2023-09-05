export interface User {
    permissions: string[],
    read: (filepath: string) => Promise<any>,
    write: (filepath: string, data: string) => Promise<any>,
    delete: (filepath: string) => Promise<any>,
}