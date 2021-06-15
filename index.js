const hexToBinary = require("hex-to-binary");

/**
 * Converts hexadecimal string to the specified data type
 * @param {string} hexString - hexadecimal string
 * @param {string} dataType - data type to which the hexadecimal string has to be converted
 * @returns {*} converted value
 */
const getParsedHexValue = (hexString, dataType) => {
  //switch case based on the data type
  switch (dataType.toUpperCase()) {
    case "REAL":
    case "LREAL":
    case "DOUBLE":
      return hex2double(hexString.substring(2)).toFixed(2);
    case "FLOAT":
      return hex2float(hexString).toFixed(2);
    case "DATE":
      const month = parseIntCustom(hexString.slice(6, 8)).toString();
      const day = parseIntCustom(hexString.slice(8, 10)).toString();
      const year = parseIntCustom(hexString.slice(2, 6)).toString();
      //convert date in epoch
      return new Date(`${month}-${day}-${year}`).getTime() || 0;
    case "INT":
    case "SINT":
    case "DINT":
      // removing preceding 0s
      return parseIntCustomHex(hexString.substring(2).replace(/^0+/, ''));
    case "WORD":
    case "DWORD":
    case "UINT":
    case "USINT":
    case "UDINT":
    case "TOD":
    case "TIME":
      return parseIntCustom(hexString) || 0;
    default:
      return parseIntCustom(hexString) || 0;
  }
};

const parseIntCustom = (hexString) => {
  //convert hex string to integer
  return parseInt(hexString, 16);
};

const parseIntCustomHex = (hexString) => {
  hexString = `0x${hexString === '' ? 0 : hexString}`
  //if hex string is positive, convert it directly to integer
  if (parseInt(hexString.charAt(2), 16) < 8) {
    return parseInt(hexString, 16);
  }
  //if hex string is negative, return 2's complement of hex string with negative sign(as integer)
  else {
    //convert hex to binary
    let binary = hexToBinary(hexString.substring(2));
    let onec = "";
    //compute 1s complement
    for (let i = 0; i < binary.length; i++) {
      if (binary.charAt(i) === "1") {
        onec += "0";
      } else {
        onec += "1";
      }
    }
    //return 2s complement as integer with negative sign
    return -(parseInt(onec, 2) + 1);
  }
};

const hex2float = (num) => {
  var sign = num & 0x80000000 ? -1 : 1;
  var exponent = ((num >> 23) & 0xff) - 127;
  var mantissa = 1 + (num & 0x7fffff) / 0x7fffff;
  return sign * mantissa * Math.pow(2, exponent);
};

const hex2double = (num) => {
  num = `0x${num === '' ? 0 : num}`
  let sign = parseInt(num.charAt(2), 16) < 8 ? 1 : -1;
  let binary = hexToBinary(num.substring(2));
  let exponent = parseInt(binary.substring(1, 12), 2) - 1023;
  let mant = binary.substring(12, 64);
  let mantissa = 1.0;
  for (let i = 0; i < 52; i++) {
    if (mant.charAt(i) === "1") {
      mantissa += Math.pow(2, parseInt(mant.charAt(i)) * -(i + 1));
    }
  }
  return sign * mantissa * Math.pow(2, exponent);
};
/**
 * @module hex_conversion
 */
module.exports = {
  getParsedHexValue,
};

// console.log(getParsedHexValue("0xfcb9ffffcd64c1cd", "LREAL"));


