import EventInterface from "../../@shared/event/event.interface";

type CustomerChangedAddressEventData = {
  customerId: string;
  customerName: string;
  address: string;
}

export default class CustomerChangedAddressEvent implements EventInterface {
  dataTimeOcurrence: Date;
  eventData: any;

  constructor(eventData: CustomerChangedAddressEventData) {
    this.dataTimeOcurrence = new Date();
    this.eventData = eventData;
  }
}