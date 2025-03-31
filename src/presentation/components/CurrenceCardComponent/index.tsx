import { NumberHelper } from "@/infrastructure/helpers";
import { CurrencePercentageComponent } from "..";
import {
  Container,
  ContainerCurrenceName,
  ContainerCurrenceValue,
  CurrenceName,
  CurrenceNameAbbreviated,
  CurrenceTotalValue,
  CurrenceValue,
} from "./style";

interface CurrenceCardComponentProps {
  currenceName?: string;
  currenceNameAbbreviated?: string;
  currenceIcon?: any;
  contentValue?: number;
  contentPercentage?: number;
  currenceTotalValue?: number;
}

export default function CurrenceCardComponent(
  props: CurrenceCardComponentProps
): React.ReactNode {
  const {
    currenceName,
    currenceNameAbbreviated,
    currenceIcon,
    contentValue,
    contentPercentage,
    currenceTotalValue,
  } = props;

  return (
    <Container>
      <img src={currenceIcon} />
      <ContainerCurrenceName>
        <CurrenceName>{currenceName}</CurrenceName>
        <CurrenceNameAbbreviated>
          {currenceNameAbbreviated}
        </CurrenceNameAbbreviated>
      </ContainerCurrenceName>
      <ContainerCurrenceValue>
        <CurrenceValue>{contentValue}</CurrenceValue>
        {currenceTotalValue !== undefined && (
          <CurrenceTotalValue>
            ± {NumberHelper.toMoney(currenceTotalValue)}
          </CurrenceTotalValue>
        )}
      </ContainerCurrenceValue>
      <CurrencePercentageComponent valueInPercentage={contentPercentage} />
    </Container>
  );
}

CurrenceCardComponent.defaultProps = {
  currenceName: "",
  currenceNameAbbreviated: "",
  currenceIcon: "",
  contentPercentage: undefined,
  currenceTotalValue: undefined,
};
