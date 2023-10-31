import CustomerCreatedEvent from "../customer-created.event";
import EnviaConsoleLog2Handler from "./envia-console-log-2.handler";

describe("Envia Console Log 2 handler tests", () => {
  it("should execute console log with correct message", () => {
    const eventHandler = new EnviaConsoleLog2Handler();
    const spyConsoleLog = jest.spyOn(console, "log");

    const event = new CustomerCreatedEvent({
      name: "Customer 1",
      rewardPoints: 100
    })

    eventHandler.handle(event);

    expect(spyConsoleLog).toHaveBeenCalledWith("Esse é o segundo console.log do evento: CustomerCreated");
  })
})