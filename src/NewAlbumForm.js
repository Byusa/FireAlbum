import React, { useState } from 'react'
import { fire, db, auth } from './base'
import firebase from 'firebase'


const NewAlbumForm = () => {
    const [albumName, setAlbumName] = useState("")

    const onAlbumNameChange = (e) => {
        //e.preventDefault();
        console.log(" on Album Name Change clicked")
        if (!albumName) {
            console.log("aaaaaaaa", albumName)
            return
        }
        db.collection("albums").doc(albumName).set({
            name: albumName
        }).then(function () {
            console.log("dddddddddddd Document successfully written!");
        }).catch(function (error) {
            console.error("eeeeeeeeeeeeeee Error writing document: ", error);
        });
        setAlbumName("")
    }
    return (
        <>
            <input
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                type="text" />
            <button onClick={onAlbumNameChange}> Create album </button>
        </>
    )
}
export default NewAlbumForm; 