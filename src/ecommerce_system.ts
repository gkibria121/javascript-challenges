// 1. **E-Commerce System**:

//    - Use the **Factory Pattern** to create different types of products.
//    - Use the **Observer Pattern** to notify customers about product availability.
//    - Apply the **Single Responsibility Principle** to separate product management, order processing, and payment handling.

interface Observer {}

interface IObserver {
  notify(message: string, data: any): void;
}
type ProductConstructor = new (...args: any[]) => Product;
class User implements IObserver {
  constructor(private name: string) {}
  notify(message: string, data: any): void {
    console.log(`${this.name} recieved notification!`, message);
  }
}

abstract class Product {
  constructor(protected _name: string, protected _price: number) {}
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }
}
type Products = "Pen" | "Book";
class Pen extends Product {
  constructor() {
    super("pen", 5);
  }
}

class Book extends Product {
  constructor() {
    super("book", 500);
  }
}
abstract class ObserverSubject {
  protected observers: IObserver[] = [];
  registerObserver(observer: IObserver) {
    this.observers.push(observer);
  }
  removeObserver(observer: IObserver) {
    let index = this.observers.indexOf(observer);
    if (index === -1) throw new Error("Observer not found!");
    this.observers.splice(index, 1);
  }
  notify(message: string, data: any = {}) {
    this.observers.forEach((observer) => observer.notify(message, data));
  }
}

class ProductNotification extends ObserverSubject {
  notifyProductAvailability(message: string, data: any = {}) {
    this.notify(message, data);
  }
}

class ProductFatory {
  constructor(private products: ProductConstructor[], private notifier: ProductNotification) {
    this.initialNotification();
  }
  isProductExists(name: string) {
    return this.products.some((product) => product.name === name);
  }
  create(name: Products) {
    let Product = this.products.find((product) => {
      return product.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    });

    if (!Product) throw new Error("Product can not be created!");
    let newProduct = new Product();

    return newProduct;
  }
  addProduct(product: ProductConstructor) {
    this.notifier.notifyProductAvailability(`${product.name} is available!`);
    this.products.push(product);
  }
  initialNotification() {
    this.products.forEach((product) => {
      this.notifier.notifyProductAvailability(`${product.name} is available!`);
    });
  }
}

class Order {
  constructor(private _product: Product, private _quantity: number) {}
  get product() {
    return this._product;
  }
  set product(value) {
    this._product = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }
}
class OrderManager {
  constructor(private order: Order) {}
  setOrder(order: Order) {
    this.order = order;
  }
  updateOrderProduct(newProduct: Product, quantity: number) {
    this.order.product = newProduct;
    this.order.quantity = quantity;
    console.log("Updating order:", this.order);
    return this;
  }
}
class OrderProcessor {
  constructor(private order: Order) {}
  setOrder(order: Order) {
    this.order = order;
  }
  process() {
    console.log("Processing order: ", this.order);
  }
}
class PaymentService {
  constructor(private order: Order) {}
  setOrder(order: Order) {
    this.order = order;
  }
  process() {
    console.log("Handling payment: ", this.order);
  }
}
let user1 = new User("Kibria");
let user2 = new User("Sumu");
let notifierService = new ProductNotification();
notifierService.registerObserver(user1);
notifierService.registerObserver(user2);
let productFactory = new ProductFatory([Pen, Book], notifierService);

let order1 = new Order(productFactory.create("Pen"), 10);
let order2 = new Order(productFactory.create("Book"), 20);

let orderManager = new OrderManager(order1).updateOrderProduct(productFactory.create("Book"), 10);
let paymentProcessor = new PaymentService(order2);
paymentProcessor.process();
