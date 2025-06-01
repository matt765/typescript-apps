// src/layout/components/sideMenu/menuItemsData.ts
import { BeerHubIcon } from '../../../assets/icons/BeerHubIcon'
import { ColorPickerIcon } from '../../../assets/icons/ColorPickerIcon'
import { EmailVerifierIcon } from '../../../assets/icons/EmailVerifierIcon'
import { UserListIcon } from '../../../assets/icons/UserListIcon'
import { WeatherForecastIcon } from '../../../assets/icons/WeatherForecastIcon'
import { HealthIcon } from '../../../assets/icons/HealthIcon'
import { TicTacToeIcon } from '../../../assets/icons/TicTacToeIcon'
import { CalculatorIcon } from '../../../assets/icons/CalculatorIcon'

export const menuItems = [
  {
    title: 'E-mail verifier',
    icon: EmailVerifierIcon,
    path: '/email-verifier',
  },
  {
    title: 'Tic Tac Toe',
    icon: TicTacToeIcon,
    path: '/tictactoe',
  },
  {
    title: 'Color picker',
    icon: ColorPickerIcon,
    path: '/color-picker',
  },
  {
    title: 'List of users',
    icon: UserListIcon,
    path: '/users-list',
  },
  {
    title: 'Beers Hub',
    icon: BeerHubIcon,
    path: '/beers-hub',
  },
  {
    title: 'Weather forecast',
    icon: WeatherForecastIcon,
    path: '/weather-forecast',
  },
  {
    title: 'Health calculators',
    icon: HealthIcon,
    path: '/health',
  },
  {
    title: 'Calculator',
    icon: CalculatorIcon,
    path: '/calculator',
  },
]
