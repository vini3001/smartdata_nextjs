import FileCopyIcon from "@mui/icons-material/FileCopy";
import { IconButton, Tooltip } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import { Container } from "./styles";
interface AdornmentProps {
  position: "start" | "end";
  selector: string;
}

export function CopyAdornment(props: AdornmentProps): React.ReactNode {
  const { position, selector } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget as HTMLButtonElement;
    const text = currentTarget.closest(selector)?.querySelector("input");
    if (_.isEmpty(text)) return;

    text.select();

    document.execCommand("copy");
    setOpen(true);
  };

  return (
    <Container position={position}>
      <IconButton
        tabIndex={-1}
        className="copy-adornment"
        onClick={handleClick}
        title="Copiar Valor"
        onMouseDown={handleMouseDown}
        edge={position}
      >
        <Tooltip
          title="Valor copiado"
          open={open}
          onClose={() => setOpen(false)}
          leaveDelay={1500}
          placement="bottom"
        >
          <FileCopyIcon />
        </Tooltip>
      </IconButton>
    </Container>
  );
}
