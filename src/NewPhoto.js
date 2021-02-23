import React, { useState } from 'react'
import { db, storage } from './base'
import firebase from 'firebase'
import styled from 'styled-components/macro'




const NewPhoto = ({ currentAlbum }) => {
    const [file, setFile] = useState(null)

    const onFileChange = (e) => {
        console.log("file name is: ", e.target.files[0].name)
        console.log("type of file.name = ", typeof e.target.files[0].name)

        setFile(e.target.files[0])
        console.log("type of file = ", typeof file)
        console.log("file  is: ", e.target.files[0])
        console.log("file = ", file)

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
        // db.collection("albums").doc(currentAlbum).set({
        //     altenativeName: "trial1"
        // })
    }
    return (
        <div>

            <input type="file" onChange={onFileChange} />
            <button onClick={onUpload}>Upload image </button>
        </div>
    )
}

export default NewPhoto
