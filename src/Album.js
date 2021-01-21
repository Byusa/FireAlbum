import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import NewPhoto from './NewPhoto'
import { db } from './base'





const Album = () => {
    const [images, setImages] = useState([])
    const match = useRouteMatch("/:album")
    const { album } = match.params

    useEffect(() => {
        db.collection('albums')
            .doc(album)
            .onSnapshot((doc) => {
                setImages(doc.data().images || []);
            })
    }, [])


    return (
        <div>
            <section>
                {images.map(image => (
                    <aside key={image.name}>
                        <img src={image.image} alt="album" />
                    </aside>
                ))
                }
            </section>
            <footer>
                <NewPhoto currentAlbum="" />
            </footer>
        </div>
    )
}

export default Album
