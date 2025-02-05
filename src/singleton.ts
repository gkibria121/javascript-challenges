class AppConfig {
  private static instance: AppConfig;
  private constructor() {
    //load config
  }

  public static getInstance() {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }
}

let conf1 = AppConfig.getInstance();
let conf2 = AppConfig.getInstance();
if (conf1 === conf2) {
  console.log("this is singleton");
}
