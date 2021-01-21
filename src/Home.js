import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import NewAlbumForm from './NewAlbumForm'
import NewPhoto from './NewPhoto'


const Home = () => {
    const [albums, setAlbums] = useState([])
    return (
        <div>
            <section>
                {
                    albums.map(album => (
                        <Link to={`/${album.id}`}>
                            <aside>
                                <img src={album.image} alt="album" />
                                <h3> {album.name} </h3>
                            </aside>
                        </Link>
                    ))
                }
            </section>
            <footer>
                <NewPhoto />
            </footer>
        </div>
    )
}

export default Home;