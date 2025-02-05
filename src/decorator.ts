interface TextProcessor {
  _text: string;
  process(): string;
}

abstract class TextProcessorModifier implements TextProcessor {
  public _text: string;
  constructor(private processor: TextProcessor) {
    this._text = processor.process();
  }
  abstract process(): string;
}

class SimpleTextProcessor implements TextProcessor {
  constructor(public _text: string) {}
  process(): string {
    return this._text;
  }
}

class BoldText extends TextProcessorModifier {
  process(): string {
    return `<b>${this._text}</b>`;
  }
}
class ItalicText extends TextProcessorModifier {
  process(): string {
    return `<i>${this._text}</i>`;
  }
}

class UnderLine extends TextProcessorModifier {
  process(): string {
    return `<u>${this._text}</u>`;
  }
}

let textProcessor = new SimpleTextProcessor("Some text");
textProcessor = new BoldText(textProcessor);
textProcessor = new ItalicText(textProcessor);
textProcessor = new UnderLine(textProcessor);
console.log(textProcessor.process());
