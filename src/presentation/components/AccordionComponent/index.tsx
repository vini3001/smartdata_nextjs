import { NumberHelper } from "@/infrastructure/helpers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import { AccordionContainer, AccordionSubTitle, AccordionTitle } from "./style";

interface CustomAccordionProps {
  accordionTitle: string;
  accordionValue?: number;
  endAdornment?: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export default function AccordionComponent(
  props: CustomAccordionProps
): React.ReactNode {
  const { accordionTitle, accordionValue, endAdornment, content, disabled } =
    props;

  return (
    <AccordionContainer key={accordionValue}>
      <Accordion disabled={disabled}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${accordionTitle}-content`}
          id={`panel-${accordionTitle}-header`}
        >
          <AccordionTitle>{accordionTitle}</AccordionTitle>
          <AccordionSubTitle>
            {!_.isEmpty(endAdornment) && (
              <span className="end-adornment">{endAdornment}</span>
            )}
            {accordionValue !== undefined && (
              <span className="accordion-value">
                {NumberHelper.toMoney(accordionValue)}
              </span>
            )}
          </AccordionSubTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}

AccordionComponent.defaultProps = {
  disabled: false,
  accordionValue: undefined,
  endAdornment: undefined,
};
