import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const PaperFormLogin = styled(Paper)(() => ({
  alignItems: 'stretch',
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '3%',
  textAlign: 'center'
}))

const PaperImageLogin = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.primaryDark[800] : '#F1F3F6',
  borderRadius: 0,
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  minHeight: '100vh'
}))

export { PaperFormLogin, PaperImageLogin }
