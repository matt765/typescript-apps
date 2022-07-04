export const headerLinks = {
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& a': {
    textDecoration: 'none',
    m: '1rem 1.5rem 1rem 1rem',
    p: '0.8rem 2rem 0.8rem 2rem',
    borderRadius: '20px',
    transition: '0.2s',
    borderWidth: '2px',
    borderColor: 'rgb(236, 236, 236)',
    borderStyle: 'solid',
    fontSize: '0.8rem',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    whiteSpace: 'nowrap',
    '&:hover': {
      transition: '0.2s',
      borderColor: '#3178c6'
    }
  }
}
export const headerGitlabIicon = {
  ml: '0.5rem',
  w: '50px',
  h: '50px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '50%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  transition: '0.2s',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  '&:hover': { transition: '0.2s' }
}

export const activeLink = { borderColor: '#3178c6' }
export const link = { borderColor: 'rgb(236, 236, 236)' }

export const gitlabIcon = {
  justifySelf: 'flex-end',
  justifyContent: 'flex-end'
}

export const headerLinksWrapper = { '@media(max-width: 1200px)':{
  gridRow: 2,
  gridColumn: 'span 2',
  '@media(max-width: 750px)': { display: 'none' }
} }
