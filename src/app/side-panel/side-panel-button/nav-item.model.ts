export interface NavItem{
    route: string;
    value: string;
    img?: string;
    childs?: NavItem[];
}