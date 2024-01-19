import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Homecards = () => {

  const[product,setProduct]=useState([]);
  useEffect(() => {
    fetch('https://product-details.onrender.com/api/courses')
      .then((response) => response.json())
      .then((data) => { setProduct(data?.data) })
      .catch((error) => console.error('Error fetching data:', error));
  }, [product]);

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {product?.map((Productdata,index) => {
        const formattedDate = format(Productdata?.createdAt, "MM-dd-yyyy");

        return (
          <Link to={`/productdetails/${Productdata._id}`}>
          <div class="col" >
            <div class="card h-10">
              <img src={Productdata?.images} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{Productdata?.title}</h5>
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
    </div>
  );
};

export default Homecards;
