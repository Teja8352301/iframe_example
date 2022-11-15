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
  >
	<Box>
	<Iframe id="iframe_teja" source={"/lppdp"} title="Liverpool Project"/>
	</Box>
  </Modal>
}