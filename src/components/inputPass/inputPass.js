import React, { useState } from 'react'

import PropTypes from 'prop-types'

import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const InputPass = React.memo(props => {
  const { label, variant, value, onChange } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
})

InputPass.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string
}

InputPass.defaultProps = {
  label: 'password',
  variant: 'filled'
}

InputPass.displayName = 'InputPass'

export default InputPass
