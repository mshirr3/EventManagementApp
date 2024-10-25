import { DateManager } from 'date-managing'
import { rl } from '../views/ReadLineHelper.js'
import { EventsViews } from '../views/EventsViews.js'

export class EventController {

    constructor() {
        this.dateManager = new DateManager()
        this.eventViews = new EventsViews()
    }

    askForChoice() {
        rl.question('Enter your choice: ', (choice) => {
            this.handleStartMenuChoice(choice)
        })
    }

    startMenu() {
        this.eventViews.showStartMenu()
        this.askForChoice()
    }

    handleStartMenuChoice(choice) {
        try {
            switch (choice) {
                case '1':
                    this.createEvent()
                    break;
                case '2':
                    // this.deleteEvent()
                    break;
                case '3':
                    // this.updateEvent()
                    break;
                case '4':
                    this.listAllEvents()
                    break;
                case '5':
                    console.log('Exiting...');
                    rl.close(); // Exit the application
                    break;
                default:
                    console.log('Invalid choice, please try again.');
                    showMainMenu(); // Display the main menu again
                    break;
            }
        } catch (error) {
            console.error('Error encountered: ' + error.message) 
            this.startMenu()
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

    listAllEvents() {
        const allCustomDates = this.dateManager.getAllCustomDates()
    
        if (allCustomDates.length === 0) {
            throw new Error('No events registered')
        }

        for (const customDate of allCustomDates) {
            console.log('Events for: ' + customDate.getFormattedDate())
            const events = customDate.getEvents()
            this.eventViews.showAllEvents(events)
        }

        this.startMenu()
    }

}