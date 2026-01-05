import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

test("kliknięcie przycisku wywołuje funkcję", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Klik</Button>);

  await userEvent.click(screen.getByText("Klik"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
