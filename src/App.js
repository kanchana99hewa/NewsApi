import React from 'react';
import './App.css';
import HeadlineList from './components/HeadlineList'; // Import the HeadlineList component
import HeadlineDetail from './components/HeadlineDetail'; // Import the HeadlineDetail component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>News Headlines</h1>
        </header>
        <Routes>
          {/* Route for the headline list */}
          <Route path="/" element={<HeadlineList />} />
          {/* Route for viewing headline details */}
          <Route path="/headline/:id" element={<HeadlineDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
