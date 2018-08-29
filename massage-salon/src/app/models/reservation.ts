export class Reservation {
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone: number;
  treatment: string;
  duration: string;
  date: string;
  time: string;
  comment: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
