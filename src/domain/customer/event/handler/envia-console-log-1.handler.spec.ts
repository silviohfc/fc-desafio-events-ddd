import CustomerCreatedEvent from "../customer-created.event";
import EnviaConsoleLog1Handler from "./envia-console-log-1.handler"

describe("Envia Console Log 1 handler tests", () => {
  it("should execute console log with correct message", () => {
    const eventHandler = new EnviaConsoleLog1Handler();
    const spyConsoleLog = jest.spyOn(console, "log");

    const event = new CustomerCreatedEvent({
      name: "Customer 1",
      rewardPoints: 100
    })

    eventHandler.handle(event);

    expect(spyConsoleLog).toHaveBeenCalledWith("Esse é o primeiro console.log do evento: CustomerCreated");
  })
})