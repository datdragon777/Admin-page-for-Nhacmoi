import React from 'react'
import './PlaylistEdit.css'
import { Edit, SimpleForm, TextInput, FileInput, FileField } from 'react-admin'
import { IconContext } from "react-icons";
import {RiDeleteBin6Line} from 'react-icons/ri'


const PlaylistEdit = (props) => {
    return (
        <Edit title='Edit Playlist' {...props}>
            <SimpleForm >
                <TextInput disabled source='id' />
                <TextInput source='playlist_name'  />
                <TextInput source='playlist_duration'/> 
                <FileInput source="files" multiple={true} label="Playlist image" placeholder='Upload your image'>
                    <FileField source="src"  title="title" />
                </FileInput>
                <TextInput disabled source="owner_user_id" />
                <div className="container" style={{width:'100%'}}>                  
                    <div className="title">Song list</div>
                    <table className="table">
                        <tr>
                            <th className="th id-column">ID</th>
                            <th className="th song-name-column">Song's name</th>
                            <th className="th delete-song-column"></th>
                        </tr>
                        <tr>
                            <td className="td">01</td>
                            <td className="td">999 Đóa hồng</td>
                            <td className="td">
                                <IconContext.Provider value={{ className: "react-delete-icons" }}>
                                    <RiDeleteBin6Line/>
                                </IconContext.Provider>
                            </td>
                        </tr>
                        <tr>
                            <td className="td">02</td>
                            <td className="td">Gurenge</td>
                            <td className="td">
                                <IconContext.Provider value={{ className: "react-delete-icons" }}>
                                    <RiDeleteBin6Line/>
                                </IconContext.Provider>
                            </td>
                        </tr>
                    </table>
                </div>
            </SimpleForm>
        </Edit>
    )
}

export default PlaylistEdit
