import React from 'react';
// const title = props.title;
  function Content(props) {
    return (
       <div>
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">{props.title}</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src={props.icon1} width="260px" height="260px" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">{props.name1}</h4>
          <h6 class="font-weight-bold blue-text my-3">{props.sub1}</h6>
          <p class="font-weight-normal dark-grey-text">
            {props.content1}</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src={props.icon2} width="260px" height="260px" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">{props.name2}</h4>
          <h6 class="font-weight-bold blue-text my-3">{props.sub2}</h6>
          <p class="font-weight-normal dark-grey-text">{props.content2}</p>
        </div>
        

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src={props.icon3} width="260px" height="260px" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">{props.name3}</h4>
          <h6 class="font-weight-bold blue-text my-3">{props.sub3}</h6>
          <p class="font-weight-normal dark-grey-text">
          {props.content3}</p>
        </div>
        </div>
      </div>
      
      
    </div> 
   </section> 
   </div>
    );
  }
  
  export default Content;