import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {

  return (
    <div className="App">
     
       <Router>
        <Routes>
          <Route path="/chat" element={<><Header backButton='/' /><Chats/></>} />
          <Route path='/chat/:person' element={<><Header backButton='/chat' /><ChatScreen/></>}></Route>
          <Route path='/' element={<><Header/><TinderCards/> <SwipeButtons/></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
