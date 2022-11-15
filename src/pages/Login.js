import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {Iframe} from "../components/liverpool/iframe/iframe"
import {ModalMui} from "../components/modal/modal"


function index() {
    const [openModal,setOpenModal] = useState(false)

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

    const iframeFunction = () =>{
        const iFrameRef = document.querySelector('#iframe_teja');
        iFrameRef.contentWindow.postMessage(
            "Hello son!"
          );
    }

    return (
        <div >
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <div>
                <h1>Welcome to Login Page</h1>
                <button onClick={()=>{iframeFunction()}}>Click Here to Send Messaage to Iframe</button>
                <Iframe id="iframe_teja" source={"/lppdp"} title="Liverpool Project"/>
            </div>
            {openModal?<ModalMui closeModal={closeModal} open={openModal}/>:null}
        </div>
    )
}

export default index;
