import { BeerHubIcon } from "../../../assets/icons/BeerHubIcon";
import { ColorPickerIcon } from "../../../assets/icons/ColorPickerIcon";
import { WeatherForecastIcon } from "../../../assets/icons/WeatherForecastIcon";
import { HealthIcon } from "../../../assets/icons/HealthIcon";
import { TicTacToeIcon } from "../../../assets/icons/TicTacToeIcon";
import { CalculatorIcon } from "../../../assets/icons/CalculatorIcon";
import { PlanetIcon } from "../../../assets/icons/PlanetIcon";
import { NewtonsCradleIcon } from "../../../assets/icons/NewtonsCradleIcon";
import { GridIcon } from "../../../assets/icons/GridIcon";

export const menuItems = [
  {
    title: "Tic Tac Toe",
    icon: TicTacToeIcon,
    path: "/tictactoe",
  },
  {
    title: "Solar System",
    icon: PlanetIcon,
    path: "/solar-system",
  },
  {
    title: "Cloth Swing",
    icon: GridIcon,
    path: "/cloth-swing",
  },
  {
    title: "Newton's Crade",
    icon: NewtonsCradleIcon,
    path: "/newtons-cradle",
  },
  {
    title: "Color picker",
    icon: ColorPickerIcon,
    path: "/color-picker",
  },
  {
    title: "Beers Hub",
    icon: BeerHubIcon,
    path: "/beers-hub",
  },
  {
    title: "Weather forecast",
    icon: WeatherForecastIcon,
    path: "/weather-forecast",
  },
  {
    title: "Health calculators",
    icon: HealthIcon,
    path: "/health",
  },
  {
    title: "Calculator",
    icon: CalculatorIcon,
    path: "/calculator",
  },
];
