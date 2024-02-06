import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from "./Loader";
import carImage from "../assets/image/2758203-200.png";
// import constant from '../constant';
import { ElearningAxios } from "../index";

const Homecards = () => {

  const[product,setProduct]=useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetch(ElearningAxios+'/api/courses')
      .then((response) => response.json())
      .then((data) => { 
        setProduct(data?.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <div>
       {isLoading ? ( // Render loader if isLoading is true
        <Loader/>
      ) : ( <div class="row row-cols-1 row-cols-md-3 g-4">
      {product?.map((Productdata,index) => {
        const formattedDate = format(Productdata?.createdAt, "MM-dd-yyyy");

        return (
          <Link to={`/productdetails/${Productdata._id}`}>
          <div class="col" >
            <div class="card ">
              <img src={carImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">{Productdata?.title}</h3>
                <p class="card-text">{Productdata?.description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated {formattedDate}</small>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </div>)}
    </div>
   
  );
};

export default Homecards;
