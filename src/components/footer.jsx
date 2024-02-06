import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="total_footer" id="contactUs" style={{marginTop:"30px"}}>
        <div className="border_footer container" >
            <div className="row">
                <div className="col-md-10 col-lg-4">
                    {/* <img src="./Images/spantag.png"  className="footer_icon"/> */}
                    <p className="footer_email"><br/>
                     
                        
                        Email: .com<br/>
                        Phone: 9751849842</p>
                    <ul className="social_ul">
                        <li><a href="#" className="fa fa-facebook"></a>
                        </li>
                        <li>
                            <a href="#" className="fa fa-instagram"></a>
                        </li>
                        <li>
                            <a href="#" className="fa fa-google"></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-lg-2 offset-lg-1">
                    <div className="footer_product">
                        <h5 className="h5_product">Products</h5>
                        <ul>
                            <li><a  >How It Works?</a></li>
                            <li><a>Integrations</a></li>
                            <li><a>Product Updates</a></li>
                            <li><a  >Our Pricing</a></li>
                            <li><a >FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-lg-2">
                    <div className="footer_product">
                        <h5 className="h5_product">Company</h5>
                        <ul>
                            <li><a>About Us</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Press & Media</a></li>
                            <li><a>Our Blog</a></li>
                            <li><a>Advertising</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer_Subscribe">
                        <h5 className="h5_product">Subscribe Us:</h5>
                        <p>Stay up to date with our latest news,<br />
                            updates and our new products</p>
                        <div>
                            <input className="form_footer" type="email" placeholder="Email Address" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            </div>
    </div>

    </>
  )
}

export default Footer