class Tag {
  /**
   *
   */
  public constructor(type: string, attr: object) {
    this.Type = type;
    this.Attr = attr;
  }
  private type VoidElement = "br" | "img" | "col" | "input"; 
  Type: string;
  Attr: object;

  public toString(): string {
    if(this.Type is VoidElement)
      return `<${this.Type} ${getAttributes()}>`;   
    }
    return `<${this.Type} ${getAttributes()}></${this.Type}>`;
  }

  private getAttributes(): string {
    const keyValue = Object.entries(this.Attr).map(([key, value]) => `${key}="${value}"`);
    return keyValue.join(" ");
  }
}
