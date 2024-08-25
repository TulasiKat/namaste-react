import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs/ContactUs";
import "@testing-library/jest-dom";

describe("test cases for contact us page", () => {
  beforeAll(()=>{
    console.log("before all")
  })
beforeEach(()=>{
  console.log("before each test case")
})
afterAll(()=>{
  console.log("after all")
})

afterEach(()=>{
  console.log("after each test case")
})
  test("should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test("should load input element inside contact us component", () => {
    render(<ContactUs />);

    const input = screen.getByPlaceholderText("Enter name here..");
    expect(input).toBeInTheDocument();
  });
  test("should load 2 input elements inside contact us component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
