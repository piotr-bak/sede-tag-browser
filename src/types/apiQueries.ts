export interface TagQueryParams {
    page: number;
    pagesize: string | number;
    fromdate?: number;
    todate?: number;
    order?: "asc" | "desc";
    min?: number;
    max?: number;
    sort?:
        | "activity"
        | "creation"
        | "votes"
        | "hot"
        | "week"
        | "month"
        | "popular";
    inname?: string;
    key?: string;
    site: string;
}
