import OrderFactory from "./order.factory";

describe("Order factory unit tests", () => {
  it("should create an order", () => {
    const orderProps = {
      id: crypto.randomUUID(),
      customerId: crypto.randomUUID(),
      items: [
        {
          id: crypto.randomUUID(),
          name: "Product 1",
          productId: crypto.randomUUID(),
          quantity: 1,
          price: 100
        }
      ]
    }

    const order = OrderFactory.create(orderProps);

    expect(order.id).toEqual(orderProps.id);
    expect(order.customerId).toEqual(orderProps.customerId);
    expect(order.items.length).toEqual(1);
  })
})