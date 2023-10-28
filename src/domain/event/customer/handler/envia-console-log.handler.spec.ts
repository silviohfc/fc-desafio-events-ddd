import CustomerChangedAddressEvent from "../customer-changed-address.event";
import EnviaConsoleLogHandler from "./envia-console-log.handler";

describe("Envia Console Log handler tests", () => {
  it("should execute console log with correct message", () => {
    const eventHandler = new EnviaConsoleLogHandler();
    const spyConsoleLog = jest.spyOn(console, "log");

    const eventData = {
      customerId: "1",
      customerName: "Customer Name",
      address: "Address"
    }

    const event = new CustomerChangedAddressEvent({
      customerId: eventData.customerId,
      customerName: eventData.customerName,
      address: eventData.address
    })

    eventHandler.handle(event);

    expect(spyConsoleLog).toHaveBeenCalledWith(`Endereço do cliente: ${eventData.customerId}, ${eventData.customerName} alterado para: ${eventData.address}`);
  })
})