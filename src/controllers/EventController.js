import { DateManager } from 'date-managing'
import { rl } from '../views/ReadLineHelper.js'
import { EventsViews } from '../views/EventsViews.js'

export class EventController {
    #dateManager
    #eventViews
    constructor() {
        this.#dateManager = new DateManager()
        this.#eventViews = new EventsViews()
    }

    askForChoice() {
        rl.question('Enter your choice: ', (choice) => {
            this.handleStartMenuChoice(choice)
        })
    }

    startMenu() {
        this.#eventViews.showStartMenu()
        this.askForChoice()
    }

    handleStartMenuChoice(choice) {
        try {
            switch (choice) {
                case '1':
                    this.createEvent()
                    break
                case '2':
                    this.deleteEvent()
                    break
                case '3':
                    this.updateEvent()
                    break
                case '4':
                    this.listAllEvents()
                    break
                case '5':
                    console.log('Exiting...')
                    rl.close() // Exit the application
                    break
                default:
                    console.log('Invalid choice, please try again.')
                    this.startMenu()
                    break
            }
        } catch (error) {
            console.error('Oops, ' + error.message)
            this.startMenu()
        }
    }

    async createEvent() {
        try {
            const date = await this.#getDate()
            const event = await this.#getEvent()

            const customDate = this.#getOrCreateCustomDate(date)
            customDate.createEvent(event)

            this.startMenu()
        } catch (error) {
            console.error('Oops, ' + error.message)
            this.startMenu()
        }

    }

    async updateEvent() {
        try {
            const customDate = await this.#getCustomDate()
            const eventId = await this.#getId()

            const updatedEvent = await this.#eventViews.askUpdatedEvent()
            customDate.updateEvent(eventId, updatedEvent)

            this.startMenu()
        } catch (error) {
            console.error('Oops, ' + error.message)
            this.startMenu()
        }

    }

    async deleteEvent() {
        try {
            const customDate = await this.#getCustomDate()
            const eventId = await this.#getId()

            customDate.deleteEvent(eventId)

            this.startMenu()
        } catch (error) {
            console.error('Oops, ' + error.message)
            this.startMenu()
        }

    }

    async #getDate() {
        const date = await this.#eventViews.askDate()
        const dateObj = new Date(date)
        return dateObj
    }

    #getOrCreateCustomDate(date) {
        if (this.#dateManager.isDateSaved(date)) {
            return this.#dateManager.getCustomDate(date)
        } else {
            this.#createCustomDate(date)
            return this.#dateManager.getCustomDate(date)
        }
    }

    async #getEvent() {
        const event = await this.#eventViews.askEvent()
        return event
    }

    async #getCustomDate() {
        const dateObj = await this.#getDate()

        const customDate = this.#dateManager.getCustomDate(dateObj)
        return customDate
    }

    async #createCustomDate(date) {
        this.#dateManager.createCustomDate(date)
    }

    async #getId() {
        const eventId = await this.#eventViews.askId()
        return eventId
    }


    listAllEvents() {
        if (this.#dateManager.customDateWithEventsExist()) {
            const customDatesWithEvents = this.#dateManager.getCustomDatesWithEvents()

            for (const customDate of customDatesWithEvents) {
                console.log('Events for ' + customDate.getFormattedDate())
                const events = customDate.getEvents()
                this.#eventViews.showAllEvents(events)
            }
        } else {
            throw new Error('No Events registered')
        }
        this.startMenu()
    }

}