import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='user-name' />
        <EmailField source='email' style={{color:'orange'}}/>
        <TextField source="account-name" />
        <TextField source="role" />
        <EditButton label="View" basePath='/users' style={{color:'#00ffff'}} />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList