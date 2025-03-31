export class SubMenusTab {
  label: string;
  body: React.ReactNode;

  constructor({ label = "", body = <></> }) {
    this.label = label;
    this.body = body;
  }
}
