import { DateManager } from 'date-managing'
import { rl } from '../views/ReadLineHelper.js'
import { EventsViews } from '../views/EventsViews.js'

export class EventController {

    constructor() {
        this.dateManager = new DateManager()
        this.eventViews = new EventsViews()
    }

    showStartMenu() {
        console.log(`
            ===== Main Menu =====
            1. Create a new event
            2. Delete an existing event
            3. Update an event
            4. List all events
            5. Return to start menu
            6. Exit
            =====================
        `)        
    }

    askForChoice() {
      rl.question('Enter your choice: ', (choice) => {
       this.handleStartMenuChoice(choice)
      })
    }

    startMenu() {
      this.showStartMenu()
      this.askForChoice()
    }

    handleStartMenuChoice(choice) {
        switch (choice) {
            case '1':
                this.createEvent()
                // startMenu() or just restar app
                break;
            case '2':

                break;
            case '3':

                break;
            case '4':

                break;
            case '6':
                console.log('Exiting...');
                rl.close(); // Exit the application
                break;
            default:
                console.log('Invalid choice, please try again.');
                showMainMenu(); // Display the main menu again
                break;
        }
    }

    async createEvent() {
        const date = await this.eventViews.askDate()
        const event = await this.eventViews.askEvent()

        const dateObj = new Date(date)
        this.dateManager.createCustomDate(dateObj)

        const customDate = this.dateManager.getCustomDate(dateObj)
        customDate.createEvent(event)
        
        console.log('Event successfully created')
        this.startMenu()
    }
}