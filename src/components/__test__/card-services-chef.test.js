import { render, screen } from "@testing-library/react";
import CardServicesChef from "../card-services-chef/card";

describe("when everything is ok", () => {
  test("Should show details when card.market is true", () => {
    const cardMock = {
      clientName: "Gabriel",
      date: "22/03/2021",
      market: true,
      marketProducts: "100g picanha",
    };
    render(<CardServicesChef card={cardMock} />);
    const fromScreen = screen.getByText("Detalhes:");
    expect(fromScreen).toBeInTheDocument();
  });
});

