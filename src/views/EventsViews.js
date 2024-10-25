import { rl } from './ReadLineHelper.js'

export class EventsViews {

  askDate() {
    return new Promise((resolve) => {
        rl.question('Enter the date (YYYY-MM-DD): ', (date) => {
            resolve(date);
        });
    });
  }

  askEvent() {
    return new Promise((resolve) => {
        rl.question('Enter the event description: ', (event) => {
            resolve(event)
        });
    });
  }

   async getDateAndEvent() {
    const date = await this.askDate()
    const event = await this.askEvent()
    return { date, event }
  }


}