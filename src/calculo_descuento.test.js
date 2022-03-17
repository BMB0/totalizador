import calculo_descuento from "./calculo_descuento";

describe("Calcula Descuento", () => {
  it("Deberia calcular el descuento para 1000 items", () => {
    expect(calculo_descuento(1000, 1000)).toEqual(30);
  });
  it("Deberia calcular el descuento para 1000 items", () => {
    expect(calculo_descuento(3000, 3000)).toEqual(150);
  });
  it("Deberia calcular el descuento para 1000 items", () => {
    expect(calculo_descuento(7000, 7000)).toEqual(490);
  });
  it("Deberia calcular el descuento para 1000 items", () => {
    expect(calculo_descuento(10000, 10000)).toEqual(1000);
  });
  it("Deberia calcular el descuento para 1000 items", () => {
    expect(calculo_descuento(30000, 30000)).toEqual(4500);
  });
});
