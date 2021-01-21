import { render, screen } from "@testing-library/react";
import HomeCustomerOptions from "../home-customer-options";

describe("When everything is ok", () => {
  test("Should show text", () => {
    render(<HomeCustomerOptions />);
    const fromScreen = screen.getByText("Editar perfil");
    expect(fromScreen).toBeInTheDocument();
  });
});
