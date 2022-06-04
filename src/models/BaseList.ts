// ! is used for required parameters
export default class BaseList<T> {
  totalRecords!: number;
  records!: T;
}