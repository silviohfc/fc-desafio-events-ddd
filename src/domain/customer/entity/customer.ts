import CustomerChangedAddressEvent from "../event/customer-changed-address.event";
import CustomerCreatedEvent from "../event/customer-created.event";
import EnviaConsoleLog1Handler from "../event/handler/envia-console-log-1.handler";
import EnviaConsoleLog2Handler from "../event/handler/envia-console-log-2.handler";
import EnviaConsoleLogHandler from "../event/handler/envia-console-log.handler";
import BaseEntity from "../../@shared/entity/base-entity";
import Address from "../value-object/address";

export default class Customer extends BaseEntity {

  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string,) {
    super();
    this._id = id;
    this._name = name;
    this.validate();

    this._eventDispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog1Handler());
    this._eventDispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog2Handler());
    this._eventDispatcher.register("CustomerChangedAddressEvent", new EnviaConsoleLogHandler());
  
    this._eventDispatcher.notify(new CustomerCreatedEvent({}));
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }
  get id(): string {
    return this._id;
  }

  get address(): Address {
    return this._address;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }
    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changeAddress(address: Address) {
    this._address = address;
    this._eventDispatcher.notify(new CustomerChangedAddressEvent({
      customerId: this._id,
      customerName: this._name,
      address: this._address.toString()
    }))
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error('Address is mandatory to activate a customer');
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
