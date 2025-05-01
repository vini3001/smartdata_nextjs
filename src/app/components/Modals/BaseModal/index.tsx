import { BoxContentBase } from "@/app/components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton } from "@mui/material";
import { Header, Modal, StyledBackdrop, TitleContainer } from "./styles";
import CustomSwitchButton from "../../SwitchButton";

interface BaseModalProps {
  opened: boolean;
  onClose?: () => void;
  onSwitch: () => void
  children: React.ReactNode;
  hasHeader?: boolean;
  useSwitch?: boolean;
  title?: string;
  subtitle?: string
  closeIcon?: boolean;
}

export default function BaseModal(props: BaseModalProps) {
  const { opened, hasHeader = true, useSwitch = false, children, onClose, onSwitch, title, subtitle, closeIcon } = props;

  return (
      <Modal
        open={opened}
        disableAutoFocus
        onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <BoxContentBase className="modal-box">
          {hasHeader && (
            <><Header>
            <TitleContainer>
              {subtitle !== '' && <span className="subtitle">{subtitle}</span>}
              {title !== '' && <span className="title">{title}</span>}
            </TitleContainer>
            {closeIcon && onClose && (
              <IconButton onClick={() => onClose()}>
                <CloseIcon />
              </IconButton>
            )}
            {useSwitch && onSwitch && (
              <IconButton onClick={() => onSwitch()}>
                <CustomSwitchButton props={{}} />
              </IconButton>
            )}
          </Header><Divider sx={{ marginTop: '1rem', marginBottom: '1rem' }} /></>
          )}
            {children}
        </BoxContentBase>
      </Modal>
  );
}

BaseModal.defaultProps = {
  title: undefined,
  closeIcon: false,
};
