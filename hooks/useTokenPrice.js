import { getWrappedNative } from "../helpers/networks";
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { c2, tokenValueTxt } from "../helpers/formatters";

const IsNative = (address) =>
  address === "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

const useTokenPrice = (options) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  const [tokenPrice, setTokenPrice] = useState();

  useEffect(() => {
    if (!options || !isInitialized) return null;
    fetchTokenPrice(options).then((price) => {
      price.usdPrice = c2.format(price.usdPrice);
      const { value, decimals, symbol } = price.nativePrice;
      price.nativePrice = tokenValueTxt(value, decimals, symbol);
      setTokenPrice(price);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, options]);

  const fetchTokenPrice = async (options) => {
    const { chain, address } = options;
    const tokenAddress = IsNative(address) ? getWrappedNative(chain) : address;
    console.log("chain", chain);
    console.log("address", address);
    console.log("tokenAddress", tokenAddress);
    return token
      .getTokenPrice({ chain, address: tokenAddress })
      .then((result) => result);
  };
  return { fetchTokenPrice, tokenPrice };
};

export default useTokenPrice;
