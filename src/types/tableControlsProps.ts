export interface TableControlsProps {
    currentRowsPerPage: number;
    handleRowsPerPageChange: (
        event: React.ChangeEvent<{ value: unknown }>
    ) => void;
    isPlaceholderData: boolean;
    isPending: boolean;
    isError: boolean;
}
