import React, { useEffect, useState } from 'react'
import './App.css';
import { db } from './base'
import { Switch, Route } from 'react-router-dom';
import Album from './Album'
import Home from './Home'

function App() {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    //Our use effect now is triggered only once we change anything 
    //cause we added [] (without [], it would be triggered in every component update)
    const unmount = db.collection('albums').onSnapshot((snapshot) => {
      const tempAlbums = []
      snapshot.forEach(doc => {
        //distructuring
        tempAlbums.push({
          ...doc.data(),
          id: doc.id
        });
      })
      setAlbums(tempAlbums)
      tempAlbums.map((temp) => { console.log(temp) })
    })
    return unmount
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home albums={albums} />} />
        <Route path="/:album" component={Album} />
      </Switch>
    </main>

  );
}

export default App