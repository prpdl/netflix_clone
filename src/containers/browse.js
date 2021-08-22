import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";
import { Header, Loading } from "../components";
export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    if (profile.displayName) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Feature>
          <Header.Text>
            Forever alone in a crowd, failed comedian Aurther Fleck seeks
            connection as he walsk the street of Gothan City. Aurther wears two
            masks -- the one he paints for his job as a clown, and the guise he
            projects in a futile attempt to feel like he&apos;s part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
