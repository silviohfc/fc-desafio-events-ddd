import EventDispatcher from "../event/@shared/event-dispatcher";
import CustomerChangedAddressEvent from "../event/customer/customer-changed-address.event";
import CustomerCreatedEvent from "../event/customer/customer-created.event";
import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Customer("", "Silvio")).toThrowError("Id is required");
  })

  it("should throw error when name is empty", () => {
    expect(() => new Customer("123", "")).toThrowError("Name is required");
  })

  it("should change name", () => {
    const customer = new Customer("123", "Silvio");
    customer.changeName("Jane");

    expect(customer.name).toBe("Jane");
  })

  it("should activate customer", () => {
    const customer = new Customer("123", "Silvio");
    const address = new Address("Street 1", 123, "São Paulo", "13330-250")
    customer.Address = address

    customer.activate();

    expect(customer.isActive()).toBe(true);
  })

  it("should deactivate customer", () => {
    const customer = new Customer("123", "Silvio");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  })

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "Silvio");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer")
  })

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  })

  it('should notify an event when customer change address', () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 9, 1, 7));
    const notifySpy = jest.spyOn(EventDispatcher.prototype, 'notify');

    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", 123, "São Paulo", "13330-250");

    customer.changeAddress(address);

    expect(notifySpy).toBeCalledWith(new CustomerChangedAddressEvent({
      customerId: customer.id,
      customerName: customer.name,
      address: address.toString()
    }));

    jest.setSystemTime(jest.getRealSystemTime());
    jest.useRealTimers();
  })

  it('should notify an event when customer was created', () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 9, 1, 7));
    const notifySpy = jest.spyOn(EventDispatcher.prototype, 'notify');
    
    new Customer("1", "Customer 1");

    expect(notifySpy).toBeCalledWith(new CustomerCreatedEvent({}));

    jest.setSystemTime(jest.getRealSystemTime());
    jest.useRealTimers();
  })
})