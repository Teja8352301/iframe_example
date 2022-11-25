import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {Iframe} from "../components/liverpool/iframe/iframe"
import {ModalMui} from "../components/modal/modal"


function index() {
    const [openModal,setOpenModal] = useState(false)
    const [imageUrl,setImageurl] = useState('/iron_man.jpg')
    const [content,setContent] = useState("Hello World!!!!");

    const closeModal = () =>{
        setOpenModal(false)
    }

    useEffect(()=>{
        window.addEventListener('message',(e)=>{
            if(e.data == "open_modal_true"){
                setOpenModal(true)
            }
        })
    })

    useEffect(()=>{
        const iFrameRef = document.querySelector('#iframe_teja_desk') ||  document.querySelector('#iframe_teja');
        //if(openModal){
            iFrameRef.contentWindow.postMessage({smallScreen:false,imageUrl:imageUrl,content:content})
        //}
        //else{
        //    iFrameRef.contentWindow.postMessage({smallScreen:true})
        //}
    },[openModal,imageUrl,content])

    const iframeFunction = () =>{
        setContent("Welcome to my world!!!!")
    }

    const afterLoad = () =>{
        const iFrameRef = document.querySelector('#iframe_teja_desk') || document.querySelector('#iframe_teja');
        iFrameRef.contentWindow.postMessage({smallScreen:false,imageUrl:imageUrl,content:content})
    }

    const imageClick = (imageUrl)=>{
        setImageurl(imageUrl)
    }

    return (
        <div >
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <div>
                <h1>Welcome to Login Page</h1>
                <button onClick={()=>{iframeFunction()}}>Click</button>
                <div style={{width:'600px',height:'200px',display:'flex'}}>
                    <img src='/iron_man.jpg' alt='Iron Man' onClick={()=>{imageClick("/iron_man.jpg")}}/>
                    <img src='/hulk.jpg' alt='Hulk'  onClick={()=>{imageClick("/hulk.jpg")}}/>
                    <img src='/captain_america.jpg' alt='Captain_America' onClick={()=>{imageClick("/captain_america.jpg")}}/>
                </div>
                <div style={{width:'300px',height:'220px',direction:'rtl'}}>
                <Iframe afterLoad={afterLoad} styling={{overflow:'hidden',transform:'scale(0.28,0.28) translate(1258px,-865px)',width:'1000px',height:'700px'}} id="iframe_teja" source={"/lppdp"} title="Liverpool Project"/>
                </div>
            </div>
            {openModal?<ModalMui afterLoad={afterLoad} closeModal={closeModal} open={openModal}/>:null}
        </div>
    )
}

export default index;
