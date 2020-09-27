import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
export class permissionsDto extends CreateBaseAbstractDto {
    readonly name: string;
    readonly description: string;
}