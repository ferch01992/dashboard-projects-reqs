import React, { useState } from 'react'

import PropTypes from 'prop-types'

import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const InputPass = React.memo(props => {
  const { error, label, messageError, variant, id, onChange, ...rest } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor={`InputLabel-${id}`}>{label}</InputLabel>
      <FilledInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange(id)}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={`IconButton-${id}`}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...rest}
      />
      <FormHelperText id={`FormHelperText-${id}`}>
        {messageError}
      </FormHelperText>
    </FormControl>
  )
})

InputPass.propTypes = {
  error: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  messageError: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string
}

InputPass.defaultProps = {
  error: false,
  label: 'password',
  variant: 'filled'
}

InputPass.displayName = 'InputPass'

export default InputPass
