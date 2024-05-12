import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Card, Content, Title, Wrapper } from "./styles";
import { binanceClient } from "src/api/binanceClient";
import PriceItem from "./priceItem";

const PricesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prices, setPrices] = useState([]);

  const handleFetchPrices = async () => {
    setIsLoading(true);

    const pricesData = await binanceClient.prices();
    const pricesArray = Object.entries(pricesData).map(([key, value]) => ({
      key,
      value,
    }));
    setPrices(pricesArray);

    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchPrices();
  }, []);

  const renderItem = useCallback(({ item }) => <PriceItem item={item} />, []);

  const memoizedPrices = useMemo(() => prices, [prices]);

  return (
    <Wrapper>
      <Content>
        <Card>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={handleFetchPrices}
              />
            }
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <Title>Preços ({memoizedPrices.length} encontrados)</Title>
            }
            contentContainerStyle={{
              gap: 12,
              paddingVertical: 16,
            }}
            initialNumToRender={20}
            removeClippedSubviews
            windowSize={20}
            data={memoizedPrices || []}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </Card>
      </Content>
    </Wrapper>
  );
};

export default PricesScreen;
