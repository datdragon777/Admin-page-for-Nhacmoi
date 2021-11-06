import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
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

const SongList = (props) => {
  const classes = useStyles();
  return (
    <List {...props}>
      <Datagrid classes={classes}>
        <TextField source='id' />
        <TextField source='song_name' />
        <TextField source='song_duration' />
        <DateField source='date_added' />  
        <TextField source='stream_count' label='Stream Count'/>
        <TextField source="files.rawFile.path"  label='Path' />  
        <TextField source="song_image.rawFile.path" label='Song image' style={{color:'orange'}}/>
        <EditButton label="View" basePath='/songs' style={{color:'#00ffff'}} />
        <DeleteButton basePath='/songs' />
      </Datagrid>
    </List>
  )
}

export default SongList
