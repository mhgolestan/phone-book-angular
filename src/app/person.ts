export interface Person {
  id: number;
  name: string;
  phone: string;
}

export class PersonClass {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
  ) {  }
}