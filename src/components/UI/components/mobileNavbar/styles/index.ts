export const mobileNavbarWrapper = {
  '@media(min-width: 750px)':{ display: 'none' },
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

export const hamburgerMenu = {
  width: '2rem',
  height: '2rem'
}

export const mobileNavbar = {
  position: 'absolute',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  inset: '0',
  // backgroundColor: 'rgba(0,0,0,0.59)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999
}

export const mobileNavbarList = {
  flexDirection: 'column',
  alignItems: 'center',
  a:{
    textDecoration: 'none',
    m: '.5rem',
    // color: 'rgb(117, 117, 117)',
    // backgroundColor: 'rgb(255, 255, 255)',
    p: '0.8rem 2rem 0.8rem 2rem',
    borderRadius: '20px',
    transition: '0.2s',
    borderWidth: '2px',
    // borderColor: 'rgb(236, 236, 236)',
    borderStyle: 'solid',
    fontSize: '0.8rem',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    whiteSpace: 'nowrap',
    '&:hover': { transition: '0.2s' }
  }
}
