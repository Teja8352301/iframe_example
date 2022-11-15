import React,{useState,useEffect} from "react";

export const LPPdp = () =>{
	const [message,useMessage] = useState('King in the North')
	useEffect(() => {
		window.addEventListener("message", function (e) {
			console.log(e.data)
			useMessage(e.data);
		});
	  }, []);
	  const openParentModal = () =>{
		window.parent.postMessage("open_modal_true")
	  }
	return <div onClick={()=>{openParentModal()}}>
		<h1>{message}</h1>
		<button onClick={openParentModal}>Open Modal</button>
	</div>
}