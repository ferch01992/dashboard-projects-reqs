import React, { useState } from 'react'

import { useStore } from 'Hook/store/useStore.js'

import { actionSetModeIsDark } from 'Actions/actionsTheme.js'

import ButtonIcon from 'Components/buttonIcon/buttonIcon.js'
import login from 'Images/login.svg'

import { MODE_PALETTE } from 'Constants/theme/themeMui.js'

import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import Button from '@mui/material/Button'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Stack from '@mui/material/Stack'

const Paper1 = styled(Paper)(({ theme }) => ({
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

const Paper2 = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.primaryDark[800] : '#F1F3F6',
  borderRadius: 0,
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  minHeight: '100vh'
}))

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

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <Paper1>
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
                Projects
              </Typography>
              <Typography variant="h5" component="h5">
                Ingrese a su cuenta
              </Typography>
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                <FilledInput
                  id="filled-adornment-email"
                  type={'text'}
                  value={values.email}
                  onChange={handleChange('email')}
                  endAdornment={
                    <InputAdornment position="end">
                      <SupervisedUserCircleIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button variant="contained">Iniciar Sesion</Button>
            </Stack>
          </Paper1>
        </Grid>
        <Hidden only={['xs']}>
          <Grid item md={8}>
            <Paper2>
              <img src={login} alt="login" />
            </Paper2>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

Login.displayName = 'Login'

export { Login }
