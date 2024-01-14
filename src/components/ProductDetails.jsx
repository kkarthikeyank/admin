import React, { useEffect, useState } from "react";
import carImage from "../assets/image/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { productId } = useParams();
  const [listAll, setAlllist] = useState([]);
  const title = listAll[0]?.title || "";

  useEffect(() => {
    fetch(`https://product-details.onrender.com/api/courses/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlllist(data?.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="product_details">
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {title}
          </a>
        </div>
      </nav>
      <div class="card" style={{ width: "18rem", marginTop: "90px" }}>
        <img src={carImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            More details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
