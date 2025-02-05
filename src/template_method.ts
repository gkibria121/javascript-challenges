abstract class AbstractDocumentGenerator {
  protected content: string = "";
  protected addHeader() {
    console.log("Generate Abstract Header");
  }
  protected addFooter() {
    console.log("Generate Abstract Footer");
  }
  protected generateContent() {
    console.log("Generate Abstract Content");
  }

  protected setContent(content: string) {
    this.content = content;
  }
  public generateDocument() {
    this.addHeader();
    this.generateContent();
    this.addFooter();
  }
}

class HTMLGenerator extends AbstractDocumentGenerator {
  protected addHeader() {
    console.log("Generate HTML Header");
  }
  protected addFooter() {
    console.log("Generate HTML Footer");
  }
  protected generateContent() {
    console.log("Generate HTML Content");
  }
}

class PDFGenerator extends AbstractDocumentGenerator {
  protected addHeader() {
    console.log("Generate PDF Header");
  }
  protected addFooter() {
    console.log("Generate PDF Footer");
  }
  protected generateContent() {
    console.log("Generate PDF Content");
  }
}

class PlainTextGenerator extends AbstractDocumentGenerator {
  protected addHeader() {
    console.log("Generate Plain Text Header");
  }
  protected addFooter() {
    console.log("Generate Plain Text Footer");
  }
  protected generateContent() {
    console.log("Generate Plain Text Content");
  }
}

let palinTextGenerator = new PlainTextGenerator();
palinTextGenerator.generateDocument();
let htmlTextGenerator = new HTMLGenerator();
htmlTextGenerator.generateDocument();
