// - **Challenge**: Build a notification system that can send notifications via email, SMS, or push notifications.
// - **Task**: Use dependency injection to decouple the notification logic from the specific notification channels.

interface INotificationChannel {
  notify(message: string, data: any): void;
}

class EmailNotificationChannel implements INotificationChannel {
  notify(message: string, data: any): void {
    console.log(`Sending notification through Email service! `);
  }
}

class SMSNotificationChannel implements INotificationChannel {
  notify(message: string, data: any): void {
    console.log(`Sending notification through SMS service! `);
  }
}

class PushNotificationChannel implements INotificationChannel {
  notify(message: string, data: any): void {
    console.log(`Sending notification through Pushing! `);
  }
}

class NotificationService {
  constructor(private channel: INotificationChannel) {}
  setNotificationChannel(channel: INotificationChannel) {
    this.channel = channel;
  }
  notify(message: string, data: any = {}): void {
    this.channel.notify(message, data);
  }
}

let emailNotificationChannel = new EmailNotificationChannel();
let pushNotificationChannel = new PushNotificationChannel();
let notificationService = new NotificationService(emailNotificationChannel);
notificationService.notify("Order recieved!");
notificationService.setNotificationChannel(pushNotificationChannel);
notificationService.notify("Order recieved!");
