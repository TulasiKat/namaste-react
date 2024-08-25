import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import MOCK_DATA from "../mocks/rescard-mock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render restaurant card component with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );
  const restName = screen.getByText("LeanCrust Pizza- ThinCrust Experts");
  expect(restName).toBeInTheDocument();
});
