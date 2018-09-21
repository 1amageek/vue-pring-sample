import * as Pring from 'pring';

const property = Pring.property;
const File = Pring.File;

export class User extends Pring.Base {
    @property public name?: string;
}
