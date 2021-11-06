import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, PasswordInput } from 'react-admin'


const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm >
        <TextInput disabled source='id' />
        <TextInput disabled source='user-name' />
        <TextInput disabled source='email' />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
        <DateInput source='age' />
        <TextInput disabled source='account-name' />
        <PasswordInput source='password' />
        <FormLabel>Set role</FormLabel>
        <FormGroup aria-label="position" row>
            <FormControlLabel control={<Checkbox />} label="Administrator" />
            <FormControlLabel control={<Checkbox />} label="Mod" />
            <FormControlLabel control={<Checkbox />} label="Member" />
        </FormGroup>
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit