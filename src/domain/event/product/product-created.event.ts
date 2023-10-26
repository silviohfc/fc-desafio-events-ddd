import EventInterface from "../@shared/event.interface";

export default class ProductCreatedEvent implements EventInterface {
  dataTimeOcurrence: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dataTimeOcurrence = new Date();
    this.eventData = eventData;
  }
}