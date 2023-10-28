import EventDispatcher from "../event/@shared/event-dispatcher";

export default class BaseEntity {
  protected _eventDispatcher: EventDispatcher = new EventDispatcher();
}