import React from "react";
import { format } from "date-fns";
const Homecards = (productsData) => {
  console.log(productsData, "productsData");
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
        {productsData?.productsData?.map((Productdata)=>{
  const formattedDate = format(Productdata?.createdAt, "MM-dd-yyyy")

            return(
        <div class="col" >
          <div class="card h-10">
            <img src={Productdata?.images} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{Productdata?.title}</h5>
              <p class="card-text">
              {Productdata?.description}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated {formattedDate}</small>
            </div>
          </div>
        </div>
       
            )
        })}
      
    </div>
  );
};

export default Homecards;
