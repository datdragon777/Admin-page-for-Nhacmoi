import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    
  } from 'react-admin'
import Icon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

export const VisitorIcon = Icon;

const useStyles = makeStyles({
    table: {
        backgroundColor: '#666666',
    },
    headerCell: {
        backgroundColor: '#262626',
    },
});

const PlaylistList = (props) => {
    const classes = useStyles();
    return (
        <List {...props}>
             <Datagrid classes={classes}>
                <TextField source='id' />
                <TextField source='playlist_name' />
                <TextField source='playlist_duration' />
                <TextField source='files.rawFile.path' label='Playlist image' />
                <TextField source="owner_user_id" />
                <EditButton label="View" basePath='/playlists' style={{color:'#00ffff'}} />
                <DeleteButton basePath='/playlists' />
            </Datagrid>
        </List>
    )
}

export default PlaylistList
