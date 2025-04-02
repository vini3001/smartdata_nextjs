import { BoxContentBase } from "@/presentation/components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton } from "@mui/material";
import { Header, Modal, StyledBackdrop, TitleContainer } from "./styles";

interface BaseModalProps {
  opened: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  hasHeader?: boolean;
  title?: string;
  subtitle?: string
  closeIcon?: boolean;
}

export default function BaseModal(props: BaseModalProps) {
  const { opened, hasHeader = true, children, onClose, title, subtitle, closeIcon } = props;

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
