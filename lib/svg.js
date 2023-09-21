class SVG {
  constructor() {
    this.shape = "";
    this.text = "";
  }
  render() {
    return `<svg version="1.1"
        width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.shape}${this.text}
        </svg>
        `;
  }
  setText(textColor, userText) {
    if (userText.length > 3) {
      throw new Error("Cannot be longer then three characters.");
    }
    this.text = `<text text-anchor="middle"x="100" y="150" fill="${textColor}" font-size=100 >${userText}</text>`;
  }
}
