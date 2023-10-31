import EventDispatcher from "../event/event-dispatcher";

export default class BaseEntity {
  protected _eventDispatcher: EventDispatcher = new EventDispatcher();
}