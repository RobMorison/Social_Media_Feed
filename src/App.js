import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [postList, setPostList] = useState([])

  function addNewEntry(entry){
    let tempEntries =[entry, ...postList];
    setPostList(tempEntries);
  }



  return (
    <div>
      <div className='container-fluid'>
        <NavBar/>
        <div className='container'>
          <div className='col-sm'>
            <CreatePostForm addNewEntryProperty={addNewEntry}/>
            <PostList  parentEntries = {postList}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
