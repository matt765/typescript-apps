export const Header = {
  justifyContent: 'space-between',
  alignItems: 'center',
  h: '12vh',
  minH: '12vh',
  maxH: '12vh',
  w: '100%',
  pl: '2rem',
  pr: '2rem',

  '@media(max-width: 900px)':{
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: '90% 10%',
    gridTemplateRows: 'repeat(2, 1fr)'
  }
}

