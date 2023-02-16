import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import Post from './Components/Post/post';

function App() {

  const [postList, setPostList] = useState([])

  function addNewEntry(entry){
    let tempEntries =[entry, ...postList];
    setPostList(tempEntries);
  }



  return (
    <div>
      <CreatePostForm addNewEntryProperty={addNewEntry}/>
      <PostList  parentEntries = {postList}/>
      
    </div>
  );
}

export default App;
