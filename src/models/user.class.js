import { ROLES } from "./roles.enum";

export class User {
    userName = "";
    email = "";
    password = "";
    role = ROLES.USER;

    constructor(username,email,password,role){
        this.userName = username,
        this.email = email,
        this.password = password,
        this.role = role
    }
}