import { TagQueryParams } from "../../types";
import { httpErrorCodes } from "./httpErrorCodes";

function constructURL(baseURL: string, paramsObject: TagQueryParams): string {
    const url = new URL(baseURL);

    for (const key in paramsObject) {
        const value = paramsObject[key as keyof TagQueryParams];
        if (value !== undefined) {
            url.searchParams.append(key, value.toString());
        }
    }
    return url.toString();
}

export async function fetchData(endpoint: string, params: TagQueryParams) {
    const url = constructURL(endpoint, params);
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const message = `Invalid server response. Error ${response.status}: ${httpErrorCodes.get(response.status)}`;
            throw new Error(message);
        } else {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.error((error as Error).message);
    }
}
