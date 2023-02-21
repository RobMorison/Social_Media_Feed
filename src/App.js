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
        <div className="p-3 mb-2 bg-info text-white">
          <NavBar/>
          <div className='container'>
            <div className='col'>
              <div className='flex-box'>
                <div class="p-3 mb-2 bg-white text-dark">
                <CreatePostForm addNewEntryProperty={addNewEntry}/>
                </div>
              </div>
              <div className='border-box'>
              <div class="p-3 mb-2 bg-white text-dark">
                <PostList  parentEntries = {postList}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
