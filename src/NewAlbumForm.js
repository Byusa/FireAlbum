import React, { useState } from 'react'
import { fire, db, auth } from './base'
import firebase from 'firebase'
import styled from 'styled-components/macro'

const Colors = {
    COINBASE: 'rgb(6, 103, 208)',
    SMOKE: '#ccc',
    RED: 'red',
    BLUE: 'blue',
};


const Header = styled.div`
    background:'blue',
    width: 100%,
    height: 10%,
    top: 20%
    @media (min-width: 700px) {
        width: 500px;
      }
`
const Title = styled.h1`
  font-size: 50px;
  color: ${props => props.color};
`;


const Card = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${Colors.SMOKE};
  padding: 15px;

  @media (min-width: 700px) {
    width: 500px;
  }
`;


const NewAlbumForm = () => {
    const [albumName, setAlbumName] = useState("")

    const onAlbumNameChange = (e) => {
        setAlbumName(e.target.value)
    }

    const onAlbumCreate = () => {
        //e.preventDefault();
        //console.log(" on Album Name Change clicked")
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
        <div>

            <input value={albumName} onChange={onAlbumNameChange} type="text" />
            <button onClick={onAlbumCreate}> Create album </button>
        </div>
    )
}
export default NewAlbumForm; 