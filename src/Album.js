import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import NewPhoto from "./NewPhoto";
import { db } from "./base";
import NavBar from "./components/NavBar";
import firebase from "firebase";

const Album = () => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const match = useRouteMatch("/:album");
  const { album } = match.params;

  useEffect(() => {
    const unmount = db
      .collection("food")
      .doc(album)
      .onSnapshot((doc) => {
        console.log("xxxxx", album);
        console.log("xxxx" + doc.data().foodImageCollection);
        setImages(doc.data().foodImageCollection || []);
        setAlbumName(doc.data().Food_Name);
      });
    console.log("heyyyy" + images);
    return unmount;
  }, []);

  const testFirebaseTrail = async () => {
    var foodName = "chicken";
    var image =
      "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80";
    const db = firebase.firestore();
    //Save image to storage
    const foodInfo = "food" + "/" + foodName + "/" + image;
    const response = await fetch(image);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child(foodInfo);

    await ref
      .put(blob)
      .then(function () {
        console.log("dddddddddddd image successfully written!");
      })
      .catch(function (error) {
        console.error("eeeeeeeeeeeeeee Error writing image: ", error);
      });

    const picturePath = ref._delegate._location.path_;

    var storageRef = await firebase.storage().ref(picturePath);
    var url = await storageRef.getDownloadURL().then(
      function (url) {
        console.log(url);
      },
      function (error) {
        console.log(error);
      }
    );

    console.log("---------------------");
    console.log("xxxxxxxxxxxxxxxxxxx = ", url, " = xxxxxxxxxxxxxxxxxxx ");
    console.log("---------------------");

    //console.log("YYYYYY", picturePath)

    const Userid =
      firebase.auth().currentUser && firebase.auth().currentUser.uid;

    var docRef = firebase
      .firestore()
      .collection("food")
      .doc(foodName.toLowerCase());

    await firebase
      .firestore()
      .collection("food")
      .doc("chicken")
      .set(
        {
          id: "01",
          Food_Name: "chicken",
          Alternate_Food_Name: "chick",
          Ingredients: "ingredients",
          Nutrients: "nutrients",
          foodImageCollection: firebase.firestore.FieldValue.arrayUnion({
            userId: "007",
            picturePath: "picturePath",
            //url: url,
          }),
        },
        { merge: true }
      )
      .then(function () {
        console.log("dddddddddddd Food Name successfully written!");
      })
      .catch(function (error) {
        console.error("eeeeeeeeeeeeeee Error3 writing Food Name: ", error);
      });
  };

  return (
    <div>
      <NavBar title={albumName} />
      <section>
        <header>
          <h1>{albumName}</h1>
          <p>
            {" "}
            Go to the <Link to="/">Home Page</Link>
          </p>
        </header>
        {images.map((image) => (
          <div>
            <div></div>
            <aside key={image.name}>
              <select name="User Info" id="user">
                <option value=""> Delete </option>
                <option value="" selected>
                  {" "}
                  More Info{" "}
                </option>
                <option value=""> Edit Description</option>
              </select>
              {console.log("immmmm", image.url)}
              {/* <img src={image.image} alt="album" /> */}
              <img src={image ? image.url : ""} alt="album" />
            </aside>
          </div>
        ))}
      </section>
      <footer>
        <NewPhoto currentAlbum={album} />
        {/* <button onClick={() => testFirebaseTrail()}>Trial button</button> */}
      </footer>
    </div>
  );
};

export default Album;
