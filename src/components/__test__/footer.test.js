import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("When everything is ok", () => {
  test("Should show text", () => {
    render(<Footer />);
    let fromScreen = screen.getByText(/contato@deixaqueeufaco.com/i);
    expect(fromScreen).toBeInTheDocument();
  });
});
