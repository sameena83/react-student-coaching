
import './App.css';
// import Accoridian from './components/Accoridian';
// import RandomColor from './components/RandomColor';
// import Star from './components/Star';
// import Photo from './components/Photo';
// import MapFilter from './components/MapFilter';
import RandomColor from './components/RandomColor';
import RandomQuotes from './components/RandomQuotes';
import ImageSlider from './components/imageSlider/ImageSlider';
import ToolTip from './components/ToolTip';
import NewComp from './components/NewComp';

function App() {
  return (
    <div className="App">
      {/* <Accoridian/>
      <RandomColor/>
      <Star/>
      <Photo/>
      <MapFilter/> */}
      {/* <RandomQuotes/> */}
      {/* <ToolTip content={"iam tool tip"}  children={" I am child"}/> */}
      <NewComp/>
      
    </div>
  );
}

export default App;
