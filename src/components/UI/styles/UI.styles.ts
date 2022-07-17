export const Header = {
  gridTemplateColumns: '20% 60% 20%',
  h: '12vh',
  minH: '12vh',
  maxH: '12vh',
  w: '100%',
  pl: '2rem',
  pr: '2rem',
  maxWidth: '100vw',

  '@media(max-width: 1300px)': {
    gridTemplateColumns: '70% 30%',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '1rem'
  },

  '@media(max-width: 850px)': {
    gridTemplateColumns: '15% 70% 15%',
    gridTemplateRows: '1fr'
  }
}

