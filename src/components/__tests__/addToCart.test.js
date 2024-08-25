import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenu-mock.json";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestraurantMenu/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from '../Header/Header'
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load a RestaurantMenu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const specificRestcategories = screen.getAllByTestId("specificRestcard");
  expect(specificRestcategories.length).toBeGreaterThan(2);
});



test("cart count should change after adding item to cart" , async()=>{
    await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            <Cart/>
              <RestaurantMenu />
            </Provider>
          </BrowserRouter>
        );
      });


      const cartItemsInitial = screen.getByText("🛒 (0 items)");

      const expandButton = screen.getByTestId("accordion-1");
      fireEvent.click(expandButton);

      const foodCards = screen.getAllByTestId("foodCard");
      expect(foodCards.length).toBe(9);

      const increaseButtons = screen.getAllByTestId("increase");
      fireEvent.click(increaseButtons[0]);


      const cartItemsLater = screen.getByText("🛒 (1 items)");
      expect(cartItemsLater).toBeInTheDocument()


      fireEvent.click(increaseButtons[1]);


      const cartItemsLater2 = screen.getByText("🛒 (2 items)");
      expect(cartItemsLater2).toBeInTheDocument()
    

      const foodCards2 = screen.getAllByTestId("foodCard");
      expect(foodCards2.length).toBe(11);


      const clearCart = screen.getByRole("button" , {name: "Clear cart"});

fireEvent.click(clearCart);

const emptycartMessage = screen.getByText("No Cart Items, Add some")
expect(emptycartMessage).toBeInTheDocument();

})




