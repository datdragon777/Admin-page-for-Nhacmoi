import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, PasswordInput } from 'react-admin'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'


const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
        <DateInput source="age" />
        <TextInput source='account-name' />
        <PasswordInput source='password' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate