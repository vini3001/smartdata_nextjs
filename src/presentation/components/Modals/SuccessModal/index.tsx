import { Modal } from "@mui/material";
import {
  ButtonOk, 
  HeaderCustom,
  ModalBody, 
  ModalContent, 
  StyledBackdrop
} from "./styles";
import LoadingPage from "../../Loading";

interface ErrorModalProps {
  title: string
  description: string
  isOpen: boolean
  isLoading?: boolean;
  handleModal: () => void
}

export default function SuccessModal(props: ErrorModalProps) {
  const { title, description, isOpen, handleModal, isLoading } = props;

  const handleClose = () => {
    handleModal();
    };

  return (
      <Modal
          open={isOpen}
          disableAutoFocus
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          slots={{ backdrop: StyledBackdrop }}
      >
        {isLoading ?  (
           <LoadingPage />
        ) : (
          <ModalContent>
              <HeaderCustom>
                    {title}
              </HeaderCustom>
              <ModalBody>
                  {description}
              </ModalBody>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <ButtonOk onClick={handleClose} variantbutton="secondary">Ok</ButtonOk>
              </div>
          </ModalContent>
        )}
      </Modal>
  );
}

SuccessModal.defaultProps = {
  isLoading: false,
};
