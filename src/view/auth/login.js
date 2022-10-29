import React, { useState } from 'react'

import { actionSetModeIsDark } from 'Actions/actionsTheme.js'
import { useStore } from 'Hook/store/useStore.js'

import { MODE_PALETTE } from 'Constants/theme/themeMui.js'
import {
  PaperFormLogin,
  PaperImageLogin
} from 'View/auth/components/papersFormLogin.js'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonIcon from 'Components/buttonIcon/buttonIcon.js'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import Input from 'Components/input/input.js'
import InputAdornment from '@mui/material/InputAdornment'
import InputPass from 'Components/inputPass/inputPass.js'
import MarkunreadIcon from '@mui/icons-material/Markunread'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import LoginDark from 'Images/loginDark.svg'
import LoginLight from 'Images/loginLight.svg'
import Logo from 'Images/logo.svg'
import SendIcon from '@mui/icons-material/Send'

import { Icon } from '@mui/material'

const Login = () => {
  const [mapStateToProps, mapDispatchToProps] = useStore()
  const { theme } = mapStateToProps
  const { paletteMode } = theme
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleThemeMode = () => {
    const mode =
      paletteMode === MODE_PALETTE.DARK ? MODE_PALETTE.LIGHT : MODE_PALETTE.DARK
    mapDispatchToProps(actionSetModeIsDark(mode))
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <PaperFormLogin>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <ButtonIcon
                statusButton={paletteMode === MODE_PALETTE.DARK}
                onClick={handleThemeMode}
                iconOn={LightModeIcon}
                iconOff={DarkModeIcon}
              />
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}>
              <Typography variant="h3" component="h3">
                <Icon>
                  <img height={25} width={25} src={Logo} />
                </Icon>
                {' Dashboard'}
              </Typography>
              <Typography variant="h6" component="h6">
                Ingrese a su cuenta
              </Typography>

              <Input
                id="email"
                label="Correo"
                value={values.email}
                onChange={handleChange}
                error={true}
                messageError={'soy el error'}
                endAdornment={
                  <InputAdornment position="end">
                    <MarkunreadIcon />
                  </InputAdornment>
                }
              />

              <InputPass
                id="password"
                label="Contraseña"
                onChange={handleChange}
                error={true}
                messageError={'soy el error'}
                value={values.password}
              />

              <Button variant="contained" size="large" endIcon={<SendIcon />}>
                Iniciar Sesion
              </Button>
              <Divider>ó</Divider>
              <Button variant="link" size="large">
                Crear cuenta
              </Button>
            </Stack>
          </PaperFormLogin>
        </Grid>
        <Hidden only={['xs']}>
          <Grid item md={8}>
            <PaperImageLogin>
              <img
                src={paletteMode === MODE_PALETTE.DARK ? LoginDark : LoginLight}
                alt="login"
              />
            </PaperImageLogin>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

Login.displayName = 'Login'

export { Login }
