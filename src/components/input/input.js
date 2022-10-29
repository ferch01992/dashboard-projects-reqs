import React from 'react'

import PropTypes from 'prop-types'

import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'

const Input = React.memo(props => {
  const { label, messageError, variant, id, onChange, ...rest } = props
  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor={`InputLabel-${id}`}>{label}</InputLabel>
      <FilledInput id={id} onChange={onChange(id)} {...rest} />
      <FormHelperText id={`FormHelperText-${id}`}>
        {messageError}
      </FormHelperText>
    </FormControl>
  )
})

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  messageError: PropTypes.string,
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
