import React, { useState } from 'react';
import Post from './Components/Post/post';
import PostList from './Components/PostList/PostList';

function App() {

  const [postList, setPostList] = useState([])

  function addNewEntry(entry){
    let tempEntries =[entry];
    setPostList(tempEntries);
  }



  return (
    <div>
      <Post />
      <PostList />
    </div>
  );
}

export default App;
