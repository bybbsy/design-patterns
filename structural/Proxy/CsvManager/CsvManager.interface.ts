export type CsvManagerResponse = string | null;

export interface ICsvManager {
    getItem: (key: string) => Promise<CsvManagerResponse>,
    setItem: (key: string, value: string) => Promise<CsvManagerResponse>
}