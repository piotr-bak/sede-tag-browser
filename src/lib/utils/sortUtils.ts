export function flipSortOrder(sortDirection: string) {
    return sortDirection === "asc" ? "desc" : "asc";
}

export function sortItems(
    items: any,
    columnName: string,
    sortDirection: string
) {
    const sortedItems = [...items].sort((a, b) => {
        if (columnName === "name") {
            return sortDirection === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }

        if (columnName === "count") {
            return sortDirection === "asc"
                ? a.count - b.count
                : b.count - a.count;
        }
    });

    return sortedItems;
}
