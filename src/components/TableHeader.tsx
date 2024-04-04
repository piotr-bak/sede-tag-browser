import { Skeleton, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

const headerCells = [
    { id: "name", label: "tag name" },
    { id: "count", label: "count" },
];

export function TableHeader( { handleSort, order, orderBy, data, isPending } ) {
    return (
        <TableHead>
            <TableRow sx={{ textTransform: "uppercase" }}>
                {headerCells.map( ( cell ) => (
                    <TableCell
                        sx={{
                            fontSize: "1rem",
                            paddingLeft: "2.2rem",
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "black",
                        }}
                        align='center'
                        key={cell.id}
                        onClick={() => handleSort( cell.id )}>
                        {( !data || isPending ) ? (
                            <Skeleton animation='wave' sx={{ fontSize: "1rem" }} />
                        ) : (
                            <>
                                {cell.label}
                                <TableSortLabel
                                    sx={{
                                        marginLeft: "0.35rem",
                                        width: "25px",
                                        height: "25px",
                                        "&.MuiTableSortLabel-root": { color: "white" },
                                        "&.MuiTableSortLabel-root:hover": {
                                            color: "white",
                                            backgroundColor: "#393939",
                                            borderRadius: "25px",
                                        },
                                        "&.Mui-active": { color: "white" },
                                        "& .MuiTableSortLabel-icon": { color: "white !important" },
                                    }}
                                    active={orderBy === cell.id}
                                    direction={order === "asc" ? "desc" : "asc"}
                                />
                            </>
                        )}
                    </TableCell>
                ) )}
            </TableRow>
        </TableHead>
    );
}
