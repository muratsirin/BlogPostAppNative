import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const signInRequest = async (email, password) => {
  try {
    await signInWithEmailAndPassword(getAuth(), email, password);
  } catch (e) {
    console.log(e);
  }
};

export const signUpRequest = async (name, surname, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    if (user) {
      await updateProfile(user, {
        displayName: `${name} ${surname}`,
      });
      getAuth().currentUser.reload();
    }
  } catch (e) {
    console.log(e);
  }
};

export const signOutRequest = async () => {
  try {
    await getAuth().signOut();
  } catch (e) {
    console.log(e);
  }
};
