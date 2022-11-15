import React,{useEffect} from "react";

export const Iframe = (props) =>{
	
	return <iframe id={props.id} src={props.source} title={props.title}>
	</iframe>
}