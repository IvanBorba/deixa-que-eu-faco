import { render, screen } from "@testing-library/react";
import RegisterPage from "../../pages/register";

describe("When everything is ok", () => {
    test("Should show client's form",  () => {
        render(<RegisterPage defaultView={false}/>);
        let fromScreen = screen.getByText("CADASTRE-SE COMO CLIENTE")
        expect(fromScreen).toBeInTheDocument();
    })

})
