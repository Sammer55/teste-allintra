import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, FlatList, Text } from "react-native";
import { Content, Wrapper } from "./styles";
import Header from "./header";
import { useTheme } from "styled-components";
import { CandlestickChart, LineChart } from "react-native-wagmi-charts";
import BitcoinToBrl from "./bitcoinToBrl";

const HomeScreen = () => {
  const data = [
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Header />
        <BitcoinToBrl />

        {/* <CandlestickChart.Provider data={data}>
          <CandlestickChart>
            <CandlestickChart.Candles />
          </CandlestickChart>
        </CandlestickChart.Provider> */}
      </Content>
    </Wrapper>
  );
};

export default HomeScreen;
