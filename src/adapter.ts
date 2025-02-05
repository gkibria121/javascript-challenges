interface IAnalyzer {
  analyze(content: string): AnalysisResult;
}

class TextAnalyzer implements IAnalyzer {
  _tool: IAnalyzer;
  constructor(tool: IAnalyzer) {
    this._tool = tool;
  }
  setTool(tool: IAnalyzer) {
    this._tool = tool;
  }
  analyze(content: string) {
    return this._tool.analyze(content);
  }
}

type AnalysisResult = {
  type: string;
  score: number;
  details: any;
};

// Concrete Strategy implementations
class SentimentAnalyzer implements IAnalyzer {
  analyze(content: string): AnalysisResult {
    // Simple sentiment analysis logic
    const words = content.toLowerCase().split(" ");
    const positiveWords = ["good", "great", "happy", "excellent"];
    const negativeWords = ["bad", "sad", "awful", "poor"];

    let score = 0;
    words.forEach((word) => {
      if (positiveWords.includes(word)) score++;
      if (negativeWords.includes(word)) score--;
    });

    return {
      type: "sentiment",
      score: score,
      details: {
        positive: words.filter((w) => positiveWords.includes(w)),
        negative: words.filter((w) => negativeWords.includes(w)),
      },
    };
  }
}

class KeywordAnalyzer implements IAnalyzer {
  analyze(content: string): AnalysisResult {
    const words = content.toLowerCase().split(" ");
    const wordFrequency: Record<string, number> = {};

    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    return {
      type: "keyword",
      score: Object.keys(wordFrequency).length,
      details: wordFrequency,
    };
  }
}

class ReadabilityAnalyzer implements IAnalyzer {
  analyze(content: string): AnalysisResult {
    const sentences = content.split(/[.!?]+/).length;
    const words = content.split(" ").length;
    const score = words / sentences; // Simple readability score

    return {
      type: "readability",
      score: score,
      details: {
        sentences,
        words,
        averageWordsPerSentence: score,
      },
    };
  }
}

class PalgiarismAnalyzerLib {
  process(content: string) {
    return {
      name: "palgiarism",
      score: 10,
      details: {},
    };
  }
}

class AnalyzerLibToAnalyzer implements IAnalyzer {
  constructor(private tool: PalgiarismAnalyzerLib) {}
  analyze(content: string): AnalysisResult {
    let result = this.tool.process(content);
    return {
      type: result.name,
      score: result.score,
      details: result.details,
    };
  }
}

let sentimentAnalyzer = new SentimentAnalyzer();
let palgiarismAnalyzer = new PalgiarismAnalyzerLib();
let textAnalyzer = new TextAnalyzer(sentimentAnalyzer);
let result = textAnalyzer.analyze("hi there how are you?");
console.log(result);
textAnalyzer.setTool(new AnalyzerLibToAnalyzer(palgiarismAnalyzer));
result = textAnalyzer.analyze("hi there how are you?");
console.log(result);
