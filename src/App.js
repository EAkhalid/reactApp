// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Services from './components/Services';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Testimonial from './components/Testimonial';
import Features from './components/Features';
import Videos from './components/Videos';
import Contacts from './components/Contacts';
import MyFooter from './components/MyFooter';
import homeData from './data/homeData';
import about from './data/aboutData';
import {useState,useEffect} from 'react'
import servicesData from './data/servicesData';
import testimonialData from './data/testimonialData';
import portoData from './data/portoData';
import featuresData from './data/featuresData';
import videoTitle from './data/videoTitle';
import menuData from './data/menuData';
import newsLetter from './data/newsLetter';
function App() {
  const [langue,setLangue]=useState("En");
  const [dataBanner,setDataBanner]=useState();
  const [serData,setServicesData]=useState();
  const [aboutData,setAboutData]=useState();
  const [testiData,setTestimonial]=useState();
  const [portoFolio,setPortoFolio]=useState();
  const [fData,setFeaturesData]=useState();
  const [vData,setVideoTitle]=useState();
  const [myData,setMyData]=useState(null);
  const [title,setTitle]=useState("");
  const [subData,setSubData]=useState();
 
  useEffect(()=>{
    
    if( localStorage.getItem('lang')==="undefined" || localStorage.getItem('lang')===null){
      setLangue("En");
      localStorage.setItem("lang","En")
    } else{
      setLangue(localStorage.getItem('lang'));
    }
    const data=homeData.items.filter((item) =>{
      return item.langue === langue
    }  );
    setDataBanner(data);
    {/*services */}
    const dataser=servicesData.items.filter((item) =>(
       item.langue === langue
    )  );
    setServicesData(null)
    setServicesData(dataser);
    {/*About */}
    const dataabout=about.items.filter((item) =>{
      return item.langue === langue
    }  );
    setAboutData(dataabout);
    {/*Testimonial */}
    const dataTest=testimonialData.items.filter((item) =>{
      return item.langue === langue
    }  );
    setTestimonial(dataTest);
    {/*Portofolio */}
    const dataPorto=portoData.items.filter((item) =>{
      return item.langue === langue
    } );
    setPortoFolio(dataPorto)
    {/*features */}
    const dataf=featuresData.items.filter((item) =>{
      return item.langue === langue
    }  );
    setFeaturesData(dataf);
    {/*videos */}
    const dataVi=videoTitle.items.filter((item) =>{
      return item.langue === langue
    }  );
    setVideoTitle(dataVi);
    {/*Menu */}
    const dataM=menuData.items.filter((item) =>{
      return item.langue === langue
    } );
    if(dataM){
    if(langue==="Ar"){
      setMyData(dataM[0].data.reverse())
    }else{
      setMyData(dataM[0].data)
    }
    setTitle(dataM[0].title)
  }
     {/*subsc */}
     const datasub=newsLetter.items.filter((item) =>{
      return item.langue === langue
  }  );
  setSubData(datasub);

  },[langue])

  return (
    <div>
      <Header myData={myData} langue={langue} setLangue={setLangue}/>
      <MainBanner myData={dataBanner}/>
      <Services myData={serData}/>
      <About myData={aboutData}/>
      <Testimonial myData={testiData}/>
      <Portofolio myData={portoFolio}/>
      <Features myData={fData}/>
      <Videos myData={vData}/>
      <Contacts langue={langue}/>
      <MyFooter datasub={subData} title={title} myData={myData} serviceData={serData}/>
     
      </div>
  );

};

export default App;
