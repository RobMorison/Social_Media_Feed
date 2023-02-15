import React, { useState } from 'react';
import Post from './Components/Post/post';

function App() {

  const [postList, setPostList] = useState([])

  return (
    <div>
      <Post />
    </div>
  );
}

export default App;
