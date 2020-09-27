import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
export class rolesDto extends CreateBaseAbstractDto {
    readonly name: string;
    readonly description: string;
}