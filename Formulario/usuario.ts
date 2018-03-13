export class Usuario {
  constructor(
    public id: number,
    public name: string,
    public tipo: string,
    public email: string,
    public email2: string,
    public tlf?: string,
    public pass: string,
    public pass2: string
    ) {  }
}
