import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, FileInput, FileField } from 'react-admin'
import Icon from '@material-ui/icons/Person';
export const VisitorIcon = Icon;

const SongEdit = (props) => {
  
  return (
    <Edit title='Edit Song' {...props}>
      <SimpleForm  >
        <TextInput disabled source='id' />
        <TextInput source='song_name'  />
        <TextInput source='song_duration'/>
        <DateInput source='date_added' />  
        <TextInput source='stream_count' />
        <FileInput source="files" label="Path" placeholder='Upload your song'>
          <FileField source="src" title="title" />
        </FileInput>
        <FileInput source="song_image" label="Song image" placeholder='Upload your image'>
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  )
}

export default SongEdit