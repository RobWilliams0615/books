import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log('add book with', title);
  };

  return <div>App</div>;
}

export default App;
