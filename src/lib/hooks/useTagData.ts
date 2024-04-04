import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchUtils";
import { MINUTE } from "../constants";
import { TagQueryParams } from "../../types";

export function useTagData(endpoint: string, params: TagQueryParams) {
    return useQuery({
        queryKey: ["tags", params],
        queryFn: () => fetchData(endpoint, params),
        refetchOnWindowFocus: false,
        staleTime: 5 * MINUTE,
        gcTime: 10 * MINUTE,
        placeholderData: keepPreviousData,
    });
}
