
import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import imges from './imges/index.js';



function App() {
  return (
    
     <React.Fragment>
       <Content icon1={imges.i3} icon2={imges.i9} icon3={imges.i10} title="PhD | MPharma | MTech Students"
        name1="Dr. Bharat Goel" name2="Nancy Tripathi" name3="Nivedita Bhardwaj"
        sub1="PhD Submitted (2018-22)" sub2="PhD Ongoing (2019-Present )" sub3="PhD Ongoing (2019-Present )" 
        content1="(Alumni)"
       />
       <Content icon1={imges.i4} icon2={imges.i13} icon3={imges.i12} 
        name1="Bharat Sahu" name2="Sanjay Kumar" name3="Sanheeta Chakraborty"
        sub1="PhD Ongoing (2018-Present )" sub2="Project Fellows (2022-Ongoing)" sub3="Project Fellows (2022-Ongoing)"
       /> 
       <Content icon1={imges.i7} icon2={imges.i6} icon3={imges.i15}
        name1="Ira Sahu" name2="Pothu Hemanth" name3=" Abhinav Kumar"
        sub1="IDD" sub2="IDD" sub3="IDD"
        content3="(Alumni)"
       />
       <Content icon1={imges.i2} icon2={imges.i5} icon3={imges.i8}
        name1="Avinav Kumar" name2="Gaurav Maurya" name3="Jayesh Kumar Tiwari"
        sub1="IDD" sub2="IDD" sub3="IDD"
        content1="(Alumni)" content2="(Alumni)" content3="(Alumni)"
       />
       <Content icon1={imges.i11} icon2={imges.i14} icon3={imges.i1}
        name1="Rajesh Meena" name2="Sourav Singh" name3="Anurag Saini"
        sub1="IDD" sub2="IDD" sub3="MPharma"
        content1="(Alumni)" content2="(Alumni)" content3="(Alumni)"
       />
       <Footer />
    </React.Fragment>
  );
}

export default App;
