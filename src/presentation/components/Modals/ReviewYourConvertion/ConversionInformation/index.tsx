import { NumberHelper } from "@/infrastructure/helpers";
import DepositInformationRowComponent from "@/presentation/pages/Operational/components/Deposit/DepositInformationRowComponent";
import {
  ConversionInformationBoxColumn,
  ConversionInformationContainer,
} from "./styles";

interface ConversionInformationProps {
  quantity: number;
  convertedQuantity: number;
  aproximateValueInReal: number;
  endAdornmentQuantity: string;
  endAdornmentConvertedQuantity: string;
  endAdornmentAproximateValueInReal: string;
  endAdornmentTax: string;
  endAdornmentTotal: string;
  tax: number;
  total: number;
}

export default function ConversionInformation(
  props: ConversionInformationProps
) {
  const {
    quantity,
    convertedQuantity,
    aproximateValueInReal,
    tax,
    total,
    endAdornmentAproximateValueInReal,
    endAdornmentConvertedQuantity,
    endAdornmentQuantity,
    endAdornmentTax,
    endAdornmentTotal,
  } = props;

  const getNumberFormated = (
    value: number | undefined,
    endAdornment: string
  ) => {
    if (value !== undefined) {
      if (endAdornment !== "BRL") {
        return String(value);
      }
      const valueFormated = NumberHelper.toMoney(value);
      return valueFormated;
    }
  };

  return (
    <ConversionInformationContainer>
      <ConversionInformationBoxColumn>
        <DepositInformationRowComponent
          title="Quantidade:"
          value={getNumberFormated(quantity, endAdornmentQuantity)}
          endAdornment={endAdornmentQuantity}
          isFullWidth={true}
        />
        <DepositInformationRowComponent
          title="Quantidade convertida:"
          value={getNumberFormated(
            convertedQuantity,
            endAdornmentConvertedQuantity
          )}
          endAdornment={endAdornmentConvertedQuantity}
          isFullWidth={true}
        />
        <DepositInformationRowComponent
          title="Valor aproximado em reais:"
          value={getNumberFormated(
            aproximateValueInReal,
            endAdornmentAproximateValueInReal
          )}
          endAdornment={endAdornmentAproximateValueInReal}
          isFullWidth={true}
        />
        <DepositInformationRowComponent
          title="Taxa:"
          value={getNumberFormated(tax, endAdornmentTax)}
          endAdornment={endAdornmentTax}
          isFullWidth={true}
        />
        <DepositInformationRowComponent
          title="Total:"
          value={getNumberFormated(total, endAdornmentTotal)}
          endAdornment={` ${endAdornmentTotal}`}
          isFullWidth={true}
        />
      </ConversionInformationBoxColumn>
    </ConversionInformationContainer>
  );
}
