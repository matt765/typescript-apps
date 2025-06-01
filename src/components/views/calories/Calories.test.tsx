import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CaloriesComp } from "./Calories";

afterEach(cleanup);

describe("Calories Calculator", () => {
  it("allows input for age, height, weight, gender and activity level", () => {
    const { getByPlaceholderText, getByRole } = render(<CaloriesComp />);

    // Simulate age input
    const ageInput = getByPlaceholderText("Input your age") as HTMLInputElement;
    fireEvent.change(ageInput, { target: { value: 25 } });
    // Check if the age input was successful
    expect(ageInput.value).toBe("25");

    // Similar tests for height, weight and activity level
    const heightInput = getByPlaceholderText(
      "Input your height"
    ) as HTMLInputElement;
    fireEvent.change(heightInput, { target: { value: 175 } });
    expect(heightInput.value).toBe("175");

    const weightInput = getByPlaceholderText(
      "Input your weight"
    ) as HTMLInputElement;
    fireEvent.change(weightInput, { target: { value: 70 } });
    expect(weightInput.value).toBe("70");

    const activityInput = getByRole("combobox") as HTMLSelectElement;
    fireEvent.change(activityInput, { target: { value: "1.2" } });
    expect(activityInput.value).toBe("1.2");
  });

  it("submits the form and displays the calories result", async () => {
    const { getByPlaceholderText, getByText, findByText, getByRole } = render(
      <CaloriesComp />
    );

    // Simulate inputs and form submission
    const ageInput = getByPlaceholderText("Input your age");
    fireEvent.change(ageInput, { target: { value: 25 } });

    const heightInput = getByPlaceholderText("Input your height");
    fireEvent.change(heightInput, { target: { value: 175 } });

    const weightInput = getByPlaceholderText("Input your weight");
    fireEvent.change(weightInput, { target: { value: 70 } });

    fireEvent.click(getByText("Female"));

    const activityInput = getByRole("combobox");
    fireEvent.change(activityInput, { target: { value: 1.2 } });

    fireEvent.click(getByText("Calculate"));

    // Check if the results are displayed
    const result = await findByText("Your results");
    expect(result).toBeInTheDocument();
  });

  it("shows validation error when inputs are invalid", async () => {
    const { getByPlaceholderText, getByRole, getByText, findByText } = render(
      <CaloriesComp />
    );

    // Simulate invalid inputs and form submission
    const ageInput = getByPlaceholderText("Input your age");
    fireEvent.change(ageInput, { target: { value: -1 } });

    const heightInput = getByPlaceholderText("Input your height");
    fireEvent.change(heightInput, { target: { value: -1 } });

    const weightInput = getByPlaceholderText("Input your weight");
    fireEvent.change(weightInput, { target: { value: -1 } });

    fireEvent.click(getByText("Female"));

    const activityInput = getByRole("combobox");
    fireEvent.change(activityInput, { target: { value: 0 } });

    fireEvent.submit(getByText("Calculate"));

    // Check if error message is displayed
    const errorMessage = await findByText("Some of the values are invalid");
    expect(errorMessage).toBeInTheDocument();
  });
});
