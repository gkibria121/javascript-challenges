// - **Challenge**: Build a discount system for an e-commerce application that can easily support new types of discounts (e.g., percentage-based, fixed-amount, seasonal).
// - **Task**: Design the system so that it is open for extension (adding new discount types) but closed for modification.

interface IDiscountProcessor {
  applyDiscount(total: number): number;
  discountType: string;
}

class Order {
  total: number = 100;
  private discountProcessor?: IDiscountProcessor;
  discountType?: string;
  setDiscountProcessor(processor: IDiscountProcessor) {
    this.discountProcessor = processor;
  }
  applyDiscount() {
    if (!this.discountProcessor) throw new Error("Discount Processor not found!");

    let result = this.discountProcessor.applyDiscount(this.total);
    this.total = result;
    this.discountType = this.discountProcessor.discountType;
  }
}

class PercentageDiscount implements IDiscountProcessor {
  discountType: string = "percentage";
  constructor(private percentage: number) {}
  applyDiscount(total: number): number {
    return total - total * (this.percentage / 100);
  }
}
class FixedAmountDiscount implements IDiscountProcessor {
  discountType: string = "fixed-amount";
  constructor(private amount: number) {}
  applyDiscount(total: number): number {
    return total - this.amount;
  }
}

class SeasonalDiscount implements IDiscountProcessor {
  discountType: string = "seasonal";
  percentage: number = 50;
  applyDiscount(total: number): number {
    return total - total * (this.percentage / 100);
  }
}
let order1 = new Order();
let order2 = new Order();
let order3 = new Order();
order1.setDiscountProcessor(new PercentageDiscount(10));
order1.applyDiscount();
order2.setDiscountProcessor(new SeasonalDiscount());
order2.applyDiscount();
order3.setDiscountProcessor(new FixedAmountDiscount(20));
order3.applyDiscount();
console.log(order1, order2, order3);
