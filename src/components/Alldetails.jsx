import React, { useEffect, useState } from "react";
import carImage from "../assets/image/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { ElearningAxios } from "..";

const Alldetails = () => {
  const { detailsId } = useParams();
  console.log(detailsId,"detailsId")
  const [isLoading, setIsLoading] = useState(true); // Track loading state
const[productdetails,setProductdetails]=useState([]);
console.log(productdetails,"productdetails")
  useEffect(() => {
    fetch(ElearningAxios+`/api/Productdetails/${detailsId}`)
      .then((response) => response.json())
      .then((data) => {
        setProductdetails(data?.data);
        setIsLoading(false); // Set loading to false when data is fetched

      })
      .catch((error) => console.error("Error fetching data:", error),
      setIsLoading(false)// Set loading to false on error
      );

  }, []);
  return (
    <div>
       {isLoading ? ( // Render loader if isLoading is true
        <Loader/>
      ) : (
      <div>
        <div class="container">
          {productdetails?.map((allData)=>{
            return(
              <div class="row row-sec" >
              <div class="col" style={{paddingBottom:"20px"}}>
                <div className="cal-right">
                  <h2  class="card-title">{allData?.carName}</h2>
                  
                </div>
                <div className="rating-sec">
                  <div style={{display:"flex",gap:"8px",alignItems:"baseline"}}>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span>3.5/8</span>
  
                  </div>
  
                  {/* <span>20 Users Review</span> */}
                </div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src={allData?.carImages} class="card-img-top" alt="..." />
  
       
      </div>
     
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
              </div>
              <div class="col">
              <div class="list-group" style={{paddingTop:"60px"}}>
    <button type="button" class="list-group-item list-group-item-action ">
      Price - {allData?.carPrice}
    </button>
    <button type="button" class="list-group-item list-group-item-action">Car Model - 2024</button>
    <button type="button" class="list-group-item list-group-item-action">Total KM  - 3000</button>
    <button type="button" class="list-group-item list-group-item-action">Location - {allData?.Location}</button>
    <button type="button" class="list-group-item list-group-item-action" >Petrol</button>
    <button type="button" class="list-group-item list-group-item-action" >Car Features </button>
    <button type="button" class="list-group-item list-group-item-action" >Conatct Number - {allData?.contactNo} </button>
  
  
  </div>
              </div>
            </div>
            )
          })}
         
        </div>
      </div>)}
    </div>
  );
};

export default Alldetails;
