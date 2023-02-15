import React, { useState } from 'react';
import Post from './Components/Post/post';
import PostList from './Components/PostList/PostList';

function App() {

  const [postList, setPostList] = useState([])

  function addNewEntry(entry){
    let tempEntries =[entry, ...postList];
    setPostList(tempEntries);
  }



  return (
    <div>
      <Post addNewEntryProperty={addNewEntry}/>
      <PostList  parentEntries = {postList}/>
    </div>
  );
}

export default App;
