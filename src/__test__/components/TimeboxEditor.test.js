import { render, cleanup, fireEvent, getByLabelText } from "@testing-library/react";
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
    it("shows add button ", () => {
      const { getByText } = render(<TimeboxEditor />);
      getByText("Dodaj");
    });
  });
  describe("add new element", () => {
    it("types new value to inputs and click add button", () => {
      const onClickAddTask = jest.fn(() => {
        const titleValue = getByLabelText(/co robisz?/i).value;
        const timeValue = getByLabelText(/ile minut?/i).value;

        return {
          title: titleValue,
          time: timeValue,
        };
      });
      const { getByText, getByLabelText } = render(<TimeboxEditor onClickAddTask={onClickAddTask} />);
      const inputTitle = getByLabelText(/co robisz?/i);
      const inputTime = getByLabelText(/ile minut?/i);

      fireEvent.change(inputTitle, { target: { value: "Uczyć się testów" } });
      fireEvent.change(inputTime, { target: { value: 30 } });
      expect(inputTitle).toHaveValue("Uczyć się testów");
      expect(inputTime).toHaveValue(30);

      fireEvent.click(getByText(/Dodaj/));

      expect(onClickAddTask).toHaveReturnedWith({ time: "30", title: "Uczyć się testów" });
    });
  });
});
