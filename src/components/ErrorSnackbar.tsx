import { Alert, Snackbar } from "@mui/material";

export function ErrorSnackbar() {
    return (
        <Snackbar open autoHideDuration={null}>
            <Alert severity='error'>Error fetching data</Alert>
        </Snackbar>
    );
}
