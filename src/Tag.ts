class Tag {
  /**
   *
   */
  public constructor(type: string, attr: object) {
    this.Type = type;
    this.Attr = attr;
  }
  private singleElement: string[] = ['br', 'img', 'col', 'input']; 
  Type: string;
  Attr: object;

  public toString(): string {
    if(this.singleElement.includes(this.Type)){
      return `<${this.Type} ${this.getAttributes()}>`;
    }
    return `<${this.Type} ${this.getAttributes()}></${this.Type}>`;
  }

  private getAttributes(): string {
    const keyValue = Object.entries(this.Attr).map(([key, value]) => `${key}="${value}"`);
    return keyValue.join(" ");
  }
}
