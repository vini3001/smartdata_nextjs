import { Container } from "./style";

interface CurrencePercentageProps {
  valueInPercentage?: number;
  valueInMoney?: number;
}

export default function CurrencePercentageComponent(
  props: CurrencePercentageProps
): React.ReactNode {
  const { valueInMoney, valueInPercentage } = props;
  const percentageText = valueInPercentage ? `+${valueInPercentage}%` : "";
  const moneyText = valueInMoney ? `+R$ ${valueInMoney}` : "";

  const displayText =
    valueInPercentage && valueInMoney
      ? `${percentageText} | ${moneyText}`
      : valueInPercentage
      ? percentageText
      : moneyText;

  return (
    <Container>
      <span>{displayText}</span>
    </Container>
  );
}

CurrencePercentageComponent.defaultProps = {
  valueInPercentage: 0,
  valueInMoney: 0,
};
