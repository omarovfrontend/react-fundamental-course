import React, { useRef, useState } from "react";
import "./styles/App.css";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript1', body: 'Description'},
    {id: 2, title: 'Javascript2', body: 'Description'},
    {id: 3, title: 'Javascript3', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Посты про JS!" />
    </div>
  );
}

export default App;
