import React from 'react'
import { Edit, SimpleForm, TextInput, FileInput, FileField } from 'react-admin'


const PlaylistEdit = (props) => {
    return (
        <Edit title='Edit Playlist' {...props}>
            <SimpleForm  >
            <TextInput disabled source='id' />
            <TextInput source='playlist_name'  />
            <TextInput source='playlist_duration'/> 
            <FileInput source="files" multiple={true} label="Playlist image" placeholder='Upload your image'>
                <FileField source="src"  title="title" />
            </FileInput>
            <TextInput disabled source="owner_user_id" />
            </SimpleForm>
        </Edit>
    )
}

export default PlaylistEdit
