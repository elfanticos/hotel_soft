export interface IUser {
    permisos:IPermission[];
}


export interface IPermission {
    desc_system?:string;
    icon?:string;
    link?:string;
};