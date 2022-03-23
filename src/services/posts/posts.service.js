import { mocks, mockImages } from "./mock";
import { initializeApp } from "firebase/app";
import camelize from "camelize";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  serverTimestamp,
  getFirestore,
  collection,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9reY-2YQgS6cWHlAP_b48X4lhyKY0nCI",
  authDomain: "blogpostappnative.firebaseapp.com",
  projectId: "blogpostappnative",
  storageBucket: "blogpostappnative.appspot.com",
  messagingSenderId: "570222324328",
  appId: "1:570222324328:web:38f9964875963eff73a9dd",
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

export const postsRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mocks;

    if (!mock) {
      reject("Posts not found");
    }
    resolve(mock);
  });
};

export const postsTransform = ({ results = [] }) => {
  const mappedResult = results.map((post) => {
    post.photos = post.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...post,
      title: post.post_title,
      content: post.post_content,
      likeCount: post.like_count,
      id: post.post_id,
      commentId: post.comments.comment_id,
    };
  });

  return camelize(mappedResult);
};

export const postsRequestFirebase = async () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(firestore, "posts")).then((querySnapshot) => {
      if (!querySnapshot.docs) {
        reject("Posts not found");
      }
      resolve(querySnapshot.docs);
    });
  });
};

export const addPostRequest = async (title, content, image) => {
  try {
    const id = doc(collection(firestore, "posts")).id;
    const imageURL = image ? await uploadPostImage(image) : "";
    const author = getAuth().currentUser.displayName;

    await setDoc(doc(firestore, "posts", id), {
      postTitle: title,
      postContent: content,
      photoURL: imageURL,
      author: author,
      createdAt: serverTimestamp(firestore),
    });
  } catch (e) {
    console.log(e.toString());
  }
};

const uploadPostImage = async (uri) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = (e) => {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileName = new Date().getTime() + "_post.jpg";
  const metadata = {
    contentType: "image/jpeg",
  };
  const fileRef = ref(getStorage(), "posts/" + fileName);
  await uploadBytes(fileRef, blob, metadata);

  blob.close();
  return await getDownloadURL(fileRef);
};
