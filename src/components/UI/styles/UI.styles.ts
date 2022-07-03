export const Header = {
  gridTemplateColumns: 'repeat(3, auto)',
  h: '12vh',
  minH: '12vh',
  maxH: '12vh',
  w: '100%',
  pl: '2rem',
  pr: '2rem',
  maxWidth: '100vw',

  '@media(max-width: 1200px)':{
    gridTemplateColumns: '70% 30%',
    gridTemplateRows: 'repeat(2, 1fr)',
    paddingBottom: '1rem'
  },

  '@media(max-width: 750px)':{
    gridTemplateColumns: '15% 70% 15%',
    gridTemplateRows: '1fr'
  }
}

