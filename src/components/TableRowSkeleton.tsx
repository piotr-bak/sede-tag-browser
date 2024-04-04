import { Skeleton, TableCell, TableRow } from "@mui/material";
import { TableRowSkeletonProps } from "../types";

export function TableRowSkeleton( { length }: TableRowSkeletonProps ) {
    return Array.from( { length } ).map( ( _, index ) => (
        <TableRow key={`skeleton-${index}`}>
            <TableCell>
                <Skeleton animation='wave' sx={{ fontSize: "1rem" }} />
            </TableCell>
            <TableCell>
                <Skeleton animation='wave' sx={{ fontSize: "1rem" }} />
            </TableCell>
        </TableRow>
    ) );
}
