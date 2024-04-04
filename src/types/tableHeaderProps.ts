export interface TableHeaderProps {
    handleSort: Function;
    order: string;
    orderBy: string | undefined;
    data: any;
    isPending: boolean;
}
