export class Item {
  label: string;
  value: string;

  constructor({ label = "", value = "" }) {
    this.label = label;
    this.value = value;
  }
}
