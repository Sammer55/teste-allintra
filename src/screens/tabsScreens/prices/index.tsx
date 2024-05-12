import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Card, Content, EmptyText, Title, Wrapper } from "./styles";
import { binanceClient } from "src/api/binanceClient";
import PriceItem from "./priceItem";
import { useToast } from "react-native-toast-notifications";

const PricesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prices, setPrices] = useState([]);

  const { show } = useToast();

  const handleFetchPrices = useCallback(async () => {
    setIsLoading(true);

    try {
      const pricesData = await binanceClient.prices();
      const pricesArray = Object.entries(pricesData).map(([key, value]) => ({
        key,
        value,
      }));
      setPrices(pricesArray);
    } catch (error) {
      if (error)
        show("Ocorreu um erro ao buscar os preços.", {
          type: "danger",
          placement: "top",
        });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchPrices();
  }, [handleFetchPrices]);

  const renderItem = useCallback(({ item }) => <PriceItem item={item} />, []);

  const memoizedPrices = useMemo(() => prices, [prices]);

  const foundedPrices = useMemo(
    () => memoizedPrices.length > 0 && `(${memoizedPrices.length} encontrados)`,
    [prices]
  );

  return (
    <Wrapper>
      <Content>
        <Card>
          <Title>Preços {foundedPrices}</Title>

          <FlatList
            ListEmptyComponent={
              <EmptyText>Nenhum preço disponível para visualização.</EmptyText>
            }
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={handleFetchPrices}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 16,
              gap: 8,
            }}
            data={memoizedPrices}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </Card>
      </Content>
    </Wrapper>
  );
};

export default PricesScreen;
