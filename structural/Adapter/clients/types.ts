export type OrmResponse = string | null | undefined;

export interface Orm {
    getItem: (key: string) => Promise<OrmResponse>,
    setItem: (key: string, value: string) => Promise<OrmResponse>
}