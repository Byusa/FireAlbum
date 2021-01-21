import React, { useEffect, useState } from 'react'
import { db, storage } from './base'
import firebase from 'firebase'

const NewPhoto = ({ currentAlbum }) => {
    const [file, setFile] = useState(null)

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const onUpload = async () => {
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        db.collection("albums").doc(currentAlbum).update({
            image: firebase.firestore.FieldValue.arrayUnion({
                name: file.name,
                url: await fileRef.getDownloadURL()
            })
        })
    }
    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={onUpload}>Upload image </button>
        </div>
    )
}

export default NewPhoto
