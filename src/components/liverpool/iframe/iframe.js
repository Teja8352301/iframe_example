import React,{useEffect} from "react";

export const Iframe = (props) =>{
	
	return <iframe onLoad={props.afterLoad} style={props.styling} id={props.id} src={props.source} title={props.title}>
	</iframe>
}