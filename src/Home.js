import React from 'react'
import { Link } from 'react-router-dom';
import NewAlbumForm from './NewAlbumForm'
import styled from 'styled-components/macro';

const Header = styled.div`
position: absolute;
width: 100%;
height: 10%;
left: 0%;
top: 0%;

background: red;
border: 1px solid rgba(0, 0, 0, 0.3);
box-sizing: border-box;
text-align: center;
align-items: center;
`


const Home = ({ albums }) => {

    return (
        <div >
            <Header>
                <p>Photoducumentation Control Managment System</p>
            </Header>
            <body>
                <section>
                    {albums.map((album) => (
                        <div>
                            <Link to={`/${album.id}`}>
                                <aside key={album.name} >
                                    <img src={album.image ? album.image[0].url : ""} alt="album" />
                                    <h3> {album.name} </h3>
                                </aside>
                            </Link>

                        </div>
                    ))}

                </section>
            </body>
            <footer>
                <NewAlbumForm />
            </footer>
        </div>
    )
}

export default Home;