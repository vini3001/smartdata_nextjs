import { NumberHelper } from "@/infrastructure/helpers";
import DepositInformationRowComponent from "@/app/pages/Operational/components/Deposit/DepositInformationRowComponent";
import {
  WithdrawInformationBoxColumn,
  WithdrawInformationContainer,
} from "./styles";

interface WithdrawInformationProps {
  quantity: number;
  aproximateValueInReal: number;
  tax: number;
  total: number;
  wallet: string;
  walletAddress: string;
  destinationTag: string;
  rede: string;
  endAdornmentQuantity: string;
  endAdornmentAproximateValueInReal: string;
  endAdornmentTax: string;
  endAdornmentTotal: string;
}

export default function WithdrawInformation(props: WithdrawInformationProps) {
  const {
    quantity,
    aproximateValueInReal,
    tax,
    total,
    wallet,
    walletAddress,
    destinationTag,
    rede,
    endAdornmentAproximateValueInReal,
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
    <>
      <WithdrawInformationContainer>
        <WithdrawInformationBoxColumn>
          <DepositInformationRowComponent
            title="Quantidade:"
            value={getNumberFormated(quantity, endAdornmentQuantity)}
            endAdornment={endAdornmentQuantity}
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
        </WithdrawInformationBoxColumn>
      </WithdrawInformationContainer>

      <WithdrawInformationContainer>
        <WithdrawInformationBoxColumn>
          <DepositInformationRowComponent title="Carteira:" value={wallet} />
          <DepositInformationRowComponent
            title="Endereço:"
            value={walletAddress}
          />
          <DepositInformationRowComponent
            title="Tag de destino:"
            value={destinationTag}
          />
          <DepositInformationRowComponent title="Rede:" value={rede} />
        </WithdrawInformationBoxColumn>
      </WithdrawInformationContainer>
    </>
  );
}
