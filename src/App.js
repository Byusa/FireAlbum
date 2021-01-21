import React, { useEffect, useState } from 'react'
import './App.css';
import { db } from './base'
import { Switch, Route } from 'react-router-dom';
import Album from './Album'
import Home from './Home'

function App() {

  const [albums, setAlbums] = useState([])

  // const [albums, setAlbums] = useState([
  //   { name: "kitten1", image: "http://placekitten.com/200/200" },
  //   { name: "kitten2", image: "http://placekitten.com/200/200" },
  //   { name: "kitten3", image: "http://placekitten.com/200/200" }
  // ])

  useEffect(() => {
    //Our use effect now is triggered only once we change anything 
    //cause we added [] (without [], it would be triggered in every component update)
    db.collection('albums').onSnapshot((snapshot) => {
      const tempAlbums = []
      snapshot.forEach(doc => {
        //distructuring
        tempAlbums.push({
          ...doc.data(),
          id: doc.id
        });
      })
      setAlbums(tempAlbums)
    })
  }, [])

  return (
    <div>
      <Home />
      <Switch>

        <Route exact path="/" render={() => <Home albums={albums} />} />
        <Route path="/:album" component={Album} />

      </Switch>
    </div>

  );
}

export default App