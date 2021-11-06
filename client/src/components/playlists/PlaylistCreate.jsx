import React from 'react'
import { Create, SimpleForm, TextInput, FileField, FileInput } from 'react-admin'


const PlaylistCreate = (props) => {
    return (
        <Create title='Create a Song' {...props}>
          <SimpleForm>
            <TextInput source='playlist_name' />
            <FileInput source="files" label="Playlist Image" >
              <FileField source="src" title="title" />
            </FileInput>
            {/* <TextInput source='playlist_duration'/> */}
          </SimpleForm>
        </Create>
      )
}

export default PlaylistCreate
