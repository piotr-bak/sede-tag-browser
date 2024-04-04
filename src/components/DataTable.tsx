import {
    Box,
    Container,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
} from "@mui/material";
import { ChangeEvent } from "react";
import { ErrorSnackbar, TableControls, TableHeader, TableRowSkeleton } from ".";
import { useEffect, useState } from "react";
import { sortItems, flipSortOrder } from "../lib/utils/sortUtils";
import { useTagData } from "../lib/hooks/useTagData";
import { ENDPOINT, TOTAL_PAGES } from "../lib/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { Tag, TagQueryParams, TagResponse } from "../types/";


export function DataTable() {
    const queryClient = useQueryClient();
    const [currentPage, setCurrentPage] = useState( 1 );
    const [currentRowsPerPage, setCurrentRowsPerPage] = useState( 10 );
    const [order, setOrder] = useState( "asc" );
    const [orderBy, setOrderBy] = useState<string | undefined>( undefined );
    const [debouncedRowsPerPage] = useDebounce( currentRowsPerPage, 350 );

    const [queryParams, setQueryParams] = useState<TagQueryParams>( {
        pagesize: "10",
        page: 1,
        site: "stackoverflow",
    } );
    const { data, isError, isPending, isPlaceholderData } = useTagData( ENDPOINT, queryParams );

    useEffect( () => {
        setQueryParams( {
            ...queryParams,
            pagesize: String( debouncedRowsPerPage ),
        } );
    }, [debouncedRowsPerPage] );

    function handleSort( columnName: string ) {
        let sortedItems = sortItems( data.items, columnName, order );
        const newOrder = flipSortOrder( order );

        queryClient.setQueryData( ["tags", queryParams], ( prevData: TagResponse ) => ( {
            ...prevData,
            items: sortedItems,
        } ) );

        setOrder( newOrder );
        setOrderBy( columnName );
    }

    function handlePageChange( _: any, newPage: number ) {
        if ( newPage < 0 || newPage > TOTAL_PAGES ) return;

        setQueryParams( { ...queryParams, page: newPage + 1 } );
        setCurrentPage( () => newPage + 1 );
        setOrderBy( undefined );
    }

    function handleRowsPerPageChange( event: ChangeEvent<HTMLInputElement | { value: unknown }> ) {
        const newRowsPerPage = +( event.target as HTMLInputElement ).value;
        setCurrentRowsPerPage( () => newRowsPerPage );
    }

    return (
        <>
            {isError && <ErrorSnackbar />}
            <Container
                sx={{
                    width: "65vw",
                    height: "60vh",
                    paddingTop: "2rem",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    overflow: "hidden",
                    border: "2px solid hsl(220, 2%, 26%)",
                    borderTop: "12px solid hsl(27, 90.5%, 68%)",
                    borderRadius: "12px 12px 4px 4px",
                    backgroundColor: "white",
                }}>
                <TableControls
                    currentRowsPerPage={currentRowsPerPage}
                    handleRowsPerPageChange={handleRowsPerPageChange}
                    isPlaceholderData={isPlaceholderData}
                    isPending={isPending}
                    isError={isError}
                />
                <TableContainer
                    sx={{
                        maxHeight: "42vh",
                        border: "1px solid lightgrey",
                    }}>
                    <Table stickyHeader aria-label='stackoverflow tag list'>
                        <TableHeader
                            handleSort={handleSort}
                            order={order}
                            orderBy={orderBy}
                            data={data}
                            isPending={isPending}
                        />
                        <TableBody>
                            {!data || isPending ? (
                                <TableRowSkeleton length={currentRowsPerPage} />
                            ) : (
                                data.items.map( ( item: Tag ) => (
                                    <TableRow hover key={`row-${item.name}`}>
                                        <TableCell
                                            sx={{
                                                fontSize: "1rem",
                                                width: "50%",
                                            }}
                                            align={"center"}>
                                            {item.name}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontSize: "1rem",
                                                width: "50%",
                                            }}
                                            align={"center"}>
                                            {item.count}
                                        </TableCell>
                                    </TableRow>
                                ) )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    sx={{
                        marginTop: "1rem",
                        marginBottom: "2rem",
                    }}>
                    {!data || isPending || isError ? (
                        <Stack
                            direction='row'
                            sx={{
                                position: "absolute",
                                bottom: "25px",
                                right: "25px"
                            }}>
                            <Skeleton
                                variant='text'
                                sx={{
                                    fontSize: "2rem",
                                    width: "5.95rem",
                                    marginLeft: "auto",
                                    marginRight: "14px",
                                }}
                            />
                            <Skeleton
                                variant='circular'
                                width={32}
                                height={32}
                                sx={{
                                    marginRight: "8px",
                                }}
                            />
                            <Skeleton
                                variant='circular'
                                width={32}
                                height={32}
                                sx={{
                                    marginRight: "8px",
                                }}
                            />
                        </Stack>
                    ) : (
                        <TablePagination
                            sx={{
                                position: "absolute",
                                bottom: "25px",
                                right: "25px"
                            }}
                            component='div'
                            count={data?.items?.length * TOTAL_PAGES}
                            rowsPerPageOptions={[]}
                            rowsPerPage={currentRowsPerPage}
                            page={currentPage - 1}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleRowsPerPageChange}
                        />
                    )}
                </Box>
            </Container>
        </>
    );
}
