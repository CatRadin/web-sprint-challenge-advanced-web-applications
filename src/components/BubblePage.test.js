import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from '../helpers/fetchColors';

jest.mock('../helpers/fetchColors');
const testColors = {data: [{ color: 'pink', code: { hex: '#e48aba'}}, 
{ color: 'green', code: { hex: '#27815f'}} ]};

test("Renders BubblePage without errors", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(testColors);
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(testColors);
  render(<BubblePage/>);

  const pink = await screen.findByText(/pink/i);
  expect(pink).toBeInTheDocument;

  const green = await screen.findByText(/green/i);
  expect(green).toBeInTheDocument;
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading