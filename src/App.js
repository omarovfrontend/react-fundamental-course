import React, { useRef, useState } from "react";
import "./styles/App.css";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'бб'},
    {id: 2, title: 'гг', body: 'аа'},
    {id: 3, title: 'вв', body: 'яя'},
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      {/* сортировка наших постов */}
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>

      {/* Условная отрисовка с помощью тернарного оператора */}
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Посты про JS!" />
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
