import './App.css';
import SideBar from './sidebar'
import Reviews from './reviews'
import Rating from './averagerating'
import Sentiment from './sentiment'
import Visitors from './visitors'


function App() {
  return (
    <div className="App">
      <div className="buttons">
      <SideBar/>
      </div>
      <Reviews reviews='1'/>
      <Rating averagerating='4.6'/>
      <Sentiment sentiment1='960' sentiment2='122' sentiment3='321'/>
      <div>
      <Visitors/>
      </div>
    </div>
  );
}

export default App;
