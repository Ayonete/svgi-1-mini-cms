import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto";

export class profileDto extends CreateBaseAbstractDto  {
    readonly homeAdress: string;
    readonly nationality: string;
    readonly StateOfOrigin: string
    readonly photo: string;
    

}