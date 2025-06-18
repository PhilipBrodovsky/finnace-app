import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { Button } from "./Button";

const callback = vi.fn();

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});
test("render button correctly", async () => {
	render(<Button>click me</Button>);
	const button = screen.getByTestId("btn");
	expect(button).toHaveTextContent("click me");
});

test("render button correctly", async () => {
	render(<Button onClick={callback}>click me</Button>);
	const button = screen.getByTestId("btn");
	await userEvent.click(button);
	expect(callback).toBeCalled();
});
