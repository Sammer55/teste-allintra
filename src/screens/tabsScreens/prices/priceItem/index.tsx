import { KeyText, Value, Wrapper, WrapperKey } from "./styles";

type PriceProps = {
  key: string;
  value: string;
};

type Props = {
  item: PriceProps;
};

const PriceItem = ({ item }: Props) => {
  return (
    <Wrapper>
      <WrapperKey>
        <KeyText>{item.key}</KeyText>
      </WrapperKey>
      <Value>{item.value}</Value>
    </Wrapper>
  );
};

export default PriceItem;
