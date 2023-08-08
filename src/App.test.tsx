import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { describe, it, expect } from 'vitest';
import App from "./App"

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  expect(getByText(/learn/i)).toBeInTheDocument()
})



describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});