import type { NextPage } from 'next'

import { TicTacToe } from '../components/views/tictactoe/TicTacToe'
import { Layout } from '../layout/Layout'

const TicTacToePage: NextPage = () => {
  return (
    <Layout>
      <TicTacToe />
    </Layout>
  )
}

export default TicTacToePage
