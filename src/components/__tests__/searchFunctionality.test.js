import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body/Body.js";
import MOCK_DATA from "../mocks/reslist-mock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the body with a search field", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByPlaceholderText("search here..");
  expect(searchButton).toBeInTheDocument();
});

test("should show the results after we searched for burger", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  const cardItems = screen.getAllByTestId("restaurant-name");
  expect(cardItems.length).toBe(1);
});


test("should show the results after we clicked on show top rated restaurants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  
    const topRatedButton = screen.getByRole("button" , {name : "Show top rated restaurants"});
    fireEvent.click(topRatedButton);
    const cardItems = screen.getAllByTestId("restaurant-name");
    expect(cardItems.length).toBe(6);
  });
  