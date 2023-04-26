import { format } from "date-fns";
import { ethers, BigNumberish } from "ethers";
import numeral from "numeral";

export const formatAMKT = (value: BigNumberish) => {
  return ethers.utils.formatUnits(value, 18);
};

export const parseAMKT = (value: string) => {
  return ethers.utils.parseUnits(value, 18);
};

export const numeralAMKT = (value: BigNumberish) => {
  return Number(formatAMKT(value));
};

export const roundDown = (value: number, decimals = 2): number => {
  return Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const trailingZero = (nonce: string): string => {
  const maxLength = 5;
  const nonceLength = nonce.length;
  if (nonceLength === maxLength) return nonce;

  const placeholderLength = maxLength - nonceLength;
  let formated: string[] = [];
  for (let i = 0; i < placeholderLength; i++) {
    formated.push("0");
  }
  formated.push(nonce);
  return formated.join("");
};

export const formatDecimal = (value: number) => {
  if (value < 10) {
    value = roundDown(value, 3);
    return numeral(value || 0).format(`0,0[.]000`);
  } else {
    value = roundDown(value, 2);
    return numeral(value || 0).format(`0,0[.]00`);
  }
};

export const bigNumberToDate = (
  value: BigNumberish,
  dateFormat = "MM/dd/yyyy"
) => {
  const converted = numeral(value).value() ?? 0;

  const formatedDate = format(new Date(converted * 1000), dateFormat);
  return formatedDate;
};
