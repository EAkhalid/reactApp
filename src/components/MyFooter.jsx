import React from 'react';
import SubScrib from './details/SubScrib';
const MyFooter = ({myData,serviceData,title,datasub}) => {
    return (
        <div>
              <div className="footer-dec">
                <img src="assets/images/footer-dec.png" alt=""/>
            </div>
           <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="about footer-item">
                            <div className="logo">
                                <a href="#"><img src="assets/images/logo.png" alt="PTY Sourcing" /></a>
                            </div>
                            <a href="#">info@company.com</a>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="services footer-item">
                            <h4>{
                                serviceData &&
                                serviceData[0].subTitle
                                }</h4>
                            <ul>
                                {
                                    serviceData &&
                                    serviceData[0].data.slice(0, 4).map((row,e)=>(
                                       
                                            <li><a href="#">{row.title}</a></li>
                                    ))
                                }
                               
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="community footer-item">
                            <h4>
                                { 
                                title
                                }
                            </h4>
                            <ul>
                                {
                                    myData &&
                                    myData.slice(0,4).map((row)=>(
                                         <li><a href={`#${row.link}`}>{row.title}</a></li>
                                    ))
                                }
                               
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        {
                            datasub &&
                            <SubScrib myData={datasub} />
                        }
                        
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright">
                            <p>Copyright © PTY., All Rights Reserved.
                                <br />
                                Designed by <a rel="nofollow" href="https://www.facebook.com/fsdmtec"
                                    title="free CSS templates">EA</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
    }
    export default MyFooter;