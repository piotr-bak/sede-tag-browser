import { Box, CircularProgress, Divider, Stack, TextField } from "@mui/material";
import { MAXIMUM_PAGE_SIZE } from "../lib/constants";
import logo from '../../public/so-logo.svg';
import { TableControlsProps } from "../types";

export function TableControls( { currentRowsPerPage, handleRowsPerPageChange, isPlaceholderData, isPending, isError }: TableControlsProps ) {
    return (
        <Box
            sx={{
                marginBottom: "1rem",
                textTransform: "uppercase",
                fontSize: "1.2rem",
                fontFamily: "Consolas, sans-serif",
            }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Box>
                    <TextField
                        sx={{
                            width: "10rem",
                            paddingBottom: "1rem",
                        }}
                        type='number'
                        label='Rows per page:'
                        value={currentRowsPerPage}
                        color='warning'
                        onChange={( e ) => handleRowsPerPageChange( e )}
                        inputProps={{
                            min: 1,
                            max: MAXIMUM_PAGE_SIZE,
                        }}
                    />
                    {( isPlaceholderData || isPending || isError ) && (
                        <CircularProgress
                            sx={{
                                marginLeft: "1rem",
                                marginTop: "0.333rem",
                            }}
                            color={isError ? "error" : "warning"}
                        />
                    )}
                </Box>
                <Box sx={{ textAlign: "right" }}>
                    <img src={logo} alt={'stackoverflow logo'} height={25}></img>
                    <h4>tag browser</h4>
                </Box>
            </Stack>
            <Divider />
        </Box>
    );
};
