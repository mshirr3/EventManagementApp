import { EventsViews } from "./views/EventsViews.js";
import { EventController } from "./controllers/EventController.js";

const controller = new EventController()

function main () {
  controller.startMenu()
}

main()
