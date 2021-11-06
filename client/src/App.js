import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import SongList from './components/Songs/SongtList'
import SongCreate from './components/Songs/SongCreate'
import SongEdit from './components/Songs/SongEdit'
import UserList from './components/Users/UserList'
import UserCreate from './components/Users/UserCreate'
import UserEdit from './components/Users/UserEdit'
import PlaylistList from './components/playlists/PlaylistList'
import PlaylistCreate from './components/playlists/PlaylistCreate'
import PlaylistEdit from './components/playlists/PlaylistEdit'
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark', 
  },
});

function App() {
  return (
    <Admin theme={theme} dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='songs'
        list={SongList}
        create={SongCreate}
        edit={SongEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='playlists'
        list={PlaylistList}
        create={PlaylistCreate}
        edit={PlaylistEdit}
      />
    </Admin>
  )
}

export default App;