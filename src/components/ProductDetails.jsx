import React, { useEffect, useState } from "react";
import carImage from "../assets/image/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg";
import { useLocation } from "react-router-dom";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { ElearningAxios } from "..";
const ProductDetails = () => {
  const { productId } = useParams();
  const [listAll, setAlllist] = useState([]);
  console.log(listAll,"listAll")
  const title = listAll[0]?.CarShowroom?.title || "";
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetch(ElearningAxios+`/api/Productdetails`)
      .then((response) => response.json())
      .then((data) => {
        let Productdetails = data?.data?.filter((dataID)=>dataID?.CarShowroom?._id === productId)
        setAlllist(Productdetails);
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
      ) : ( <div className="product_details">
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {title}
          </a>
        </div>
      </nav>
<div className="row row-cols-1 row-cols-md-3 g-4">
      {listAll?.map((cardList)=>{
        console.log(cardList,"cardList")
        return(  <Link to={`/allDetails/${cardList?._id}`}>

        <div class="card col " >
          <img src={cardList?.carImages} class="card-img-top" alt="..." />
          <div class="card-body ">
            <h5 class="card-title">{cardList?.carName}</h5>
            <p class="card-text">
             {cardList?.carDescription}
            </p>
            <a href="#" class="btn btn-primary">
              More details
            </a>
          </div>
        </div>
  </Link>)
      })}
  </div>
    
    </div> )}
      </div>
   
  );
};

export default ProductDetails;
