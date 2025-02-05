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

class PalgiarismAnalyzer implements IAnalyzer {
  analyze(content: string): AnalysisResult {
    return {
      type: "palgiarism",
      score: 10,
      details: {},
    };
  }
}

let sentimentAnalyzer = new SentimentAnalyzer();
let keywordAnalyzer = new KeywordAnalyzer();

let textAnalyzer = new TextAnalyzer(sentimentAnalyzer);
let result = textAnalyzer.analyze("hi there how are you?");
console.log(result);
textAnalyzer.setTool(keywordAnalyzer);
result = textAnalyzer.analyze("hi there how are you?");
console.log(result);
