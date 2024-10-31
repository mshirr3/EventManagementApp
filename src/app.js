import { EventsViews } from "./views/EventsViews.js";
import { EventController } from "./controllers/EventController.js";



function main () {
  const controller = new EventController()  
  controller.startMenu()
}

main()
