import EventInterface from "../../@shared/event/event.interface";

export default class CustomerCreatedEvent implements EventInterface {
  dataTimeOcurrence: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dataTimeOcurrence = new Date();
    this.eventData = eventData;
  }
}