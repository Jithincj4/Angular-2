export interface Comment{
    id:string;
    name:string;
    img:string;
    comment:string;
    reply:Comment[];
}