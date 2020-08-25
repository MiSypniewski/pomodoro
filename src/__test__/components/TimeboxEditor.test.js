import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import TimeboxEditor from "../../components/TimeboxEditor";

describe("<TimeboxEditor />", () => {
  afterEach(cleanup);
  describe("check html elements", () => {
    it("shows input Co robisz? ", () => {
      const { getByText } = render(<TimeboxEditor />);
      getByText("Co robisz?");
    });
    it("shows input Ile minut? ", () => {
      const { getByText } = render(<TimeboxEditor />);
      getByText("Ile minut?");
    });
    it("shows add button? ", () => {
      const { getByText } = render(<TimeboxEditor />);
      getByText("Dodaj");
    });
  });
  describe("add new element - type inputs and click button", () => {
    // it("should ", () => {
    //   const results = render(<TimeboxEditor />);
    //   expect(results).toEqual();
    // });

    it("types strings to inputs", () => {
      const { debug, getByText, getByRole } = render(<TimeboxEditor />);

      const inputTitle = getByRole("textbox", { name: "Co robisz?" });
      const inputTime = getByRole("spinbutton", { name: "Ile minut?" });

      fireEvent.change(inputTitle, { target: { value: "Uczyć się testów" } });
      fireEvent.change(inputTime, { target: { value: 30 } });

      // fireEvent.click(getByText(/Dodaj/));

      // fireEvent.input(getByRole("textbox", { name: "Co robisz?" }), "Jebać tedego");

      debug();
    });
  });
});
