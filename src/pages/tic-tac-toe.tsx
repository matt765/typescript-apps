import { NextPage } from "next"
import { TicTacToe } from "../components/ticTacToe/TicTacToe.comp"
import { UI } from "../components/UI/UI.comp"

const TicTacToePage: NextPage = () => {
    return (
      <UI>
        <TicTacToe />
      </UI>
    )
  }
  
  export default TicTacToePage