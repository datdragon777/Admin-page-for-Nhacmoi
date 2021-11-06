import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, FileField, FileInput } from 'react-admin'

const SongCreate = (props) => {
  return (
    <Create title='Create a Song' {...props}>
      <SimpleForm>
        <TextInput source='song_name' />
        <FileInput source="files" label="Path" placeholder='Upload your song'>
          <FileField source="src" title="title" />
        </FileInput>
        <FileInput source="song_image" label="Song image" placeholder='Upload your image'>
          <FileField source="src" title="title" />
        </FileInput>
        <TextInput source='song_duration'/>
        <DateInput source='date_added' />  
      </SimpleForm>
    </Create>
  )
}

export default SongCreate
