import { Address } from "./Address";
import { Company } from "./Company";
import { Geo } from "./Geo";


export class User{
    id:string="";
    name:string="";
    username:string="";
    email:string="";
    address:Address={
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: new Geo(),
    };
    phone:string="";
    website:string="";
    company:Company={
        name:"",
        catchPhrase:"",
        bs:"",
    }
}