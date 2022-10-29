import React from 'react'

import PropTypes from 'prop-types'

import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const Input = React.memo(props => {
  const { label, variant, id, onChange, ...rest } = props
  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor="filled-adornment-email">{label}</InputLabel>
      <FilledInput id={id} onChange={onChange(id)} {...rest} />
    </FormControl>
  )
})

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string
}

Input.defaultProps = {
  label: 'password',
  type: 'text',
  variant: 'filled'
}

Input.displayName = 'Input'

export default Input
