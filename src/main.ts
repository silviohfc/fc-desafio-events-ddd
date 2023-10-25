import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

// Agregado de customers
let customer = new Customer("123", "Silvio")
const address = new Address("Rua Dois", 2, "12345-678", "São Paulo")
customer.Address = address
customer.activate()

// Se relacionam por ID

// Agregado de orders
const item1 = new OrderItem("1", "Item 1", 10, "1", 1)
const item2 = new OrderItem("2", "Item 2", 15, "1", 1)
const order = new Order("1", "123", [item1, item2])