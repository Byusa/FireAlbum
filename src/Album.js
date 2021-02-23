import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import NewPhoto from './NewPhoto'
import { db } from './base'
import NavBar from './components/NavBar'





const Album = () => {
    const [images, setImages] = useState([])
    const [albumName, setAlbumName] = useState("");

    const match = useRouteMatch("/:album")
    const { album } = match.params

    useEffect(() => {
        const unmount = db.collection('albums')
            .doc(album)
            .onSnapshot((doc) => {
                console.log("xxxx" + doc.data().image)
                setImages(doc.data().image || []);
                setAlbumName(doc.data().name)
            })
        console.log("heyyyy" + images)
        return unmount;
    }, [])

    return (
        <div>
            <NavBar title={albumName} />
            <section>

                <header>
                    <h1>{albumName}</h1>
                    <p> Go to the <Link to="/">Home Page</Link></p>
                </header>
                {images.map(image => (
                    <div >
                        <div >
                            <select name="User Info" id="user">
                                <option value=""> Delete </option>
                                <option value=""> Edit Description</option>
                            </select>
                        </div>
                        <aside key={image.name}>
                            {console.log("immmmm", image.url)}
                            {/* <img src={image.image} alt="album" /> */}
                            <img src={image ? image.url : ""} alt="album" />
                        </aside>
                    </div>

                ))
                }

            </section>
            <footer>
                <NewPhoto currentAlbum={album} />
            </footer>
        </div>
    )
}

export default Album
