import descuento from "./descuento";

describe("Descuento", () => {
  it("Deberia retornar el % de descuento", () => {
    expect(descuento(1000)).toEqual(3);
  });
  it("Deberia retornar el % de descuento", () => {
    expect(descuento(3000)).toEqual(5);
  });
  it("Deberia retornar el % de descuento", () => {
    expect(descuento(7000)).toEqual(7);
  });
  it("Deberia retornar el % de descuento", () => {
    expect(descuento(10000)).toEqual(10);
  });
  it("Deberia retornar el % de descuento", () => {
    expect(descuento(30000)).toEqual(15);
  });
});
