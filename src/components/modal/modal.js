import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Iframe} from "../../components/liverpool/iframe/iframe"

export const ModalMui = (props) =>{
	return <Modal
	open={props.open}
	onClose={props.closeModal}
	aria-labelledby="modal-modal-title"
	aria-describedby="modal-modal-description"
	sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
  >
	<Iframe afterLoad={props.afterLoad} styling={{overflow:'hidden',transform:'scale(0.60,0.60)',width:'1000px',height:'700px'}} id="iframe_teja_desk" source={"/lppdp"} title="Liverpool Project"/>
  </Modal>
}