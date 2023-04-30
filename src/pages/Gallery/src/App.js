import WSPGallery from './components/WSPGallery';
import './App.css';
import IMG from './images/index';
// import  lab from './images/IMG_6676.JPG';
import lab from "./images/IMG_6676.JPG"
function App() {

  const galleryImages = [
    {
      img: IMG.i1
    },
    {
      img: IMG.i2
    },
    {
      img :IMG.i5
    },
    {
      img :IMG.i11
    },
    {
      img :IMG.i9
    },
    {
      img :IMG.i10
    },
    {
      img :IMG.i8
    },
    {
      img :IMG.i12
    },
    {
      img :IMG.i13
    },
    {
      img :IMG.i14
    }
  ]

  return (
    <div className="App">
      <br />
      <div>
        <strong>Department Laboratory Gallery</strong>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      {/* <div>- -</div> */}
    </div>
  );
}

export default App;
