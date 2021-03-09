/**
 * Converts hexadecimal string to the specified data type
 * @param {string} hexString - hexadecimal string
 * @param {string} dataType - data type to which the hexadecimal string has to be converted
 * @returns {*} converted value
 */
const getParsedHexValue = (hexString, dataType) => {
  //switch case based on the data type
  switch (dataType) {
    case "FLOAT":
      return hex2float(hexString).toFixed(2);
    case "DATE":
      const month = parseIntCustom(hexString.slice(6, 8)).toString();
      const day = parseIntCustom(hexString.slice(8, 10)).toString();
      const year = parseIntCustom(hexString.slice(2, 6)).toString();
      //convert date in epoch
      return new Date(`${month}-${day}-${year}`).getTime() || 0;
    case "INT":
      value = parseIntCustom(hexString);
      return (value >= 65536 ? value - 65536 : value) || 0;
    case "TOD":
    case "UINT":
    case "USINT":
    case "UDINT":
    case "TIME":
      return parseIntCustom(hexString) || 0;
  }
};

const parseIntCustom = (hexString) => {
  //convert hex string to integer
  return parseInt(hexString, 16);
};

const parseFloatCustom = (str) => {
  var float = 0,
    sign,
    exp,
    int = 0,
    multi = 1;
  //check if string consists of "0x"(prefix for hex string)
  if (/^0x/.exec(str)) {
    //convert hex string to integer
    int = parseInt(str, 16);
  } else {
    //convert ASCII to integer
    for (var i = str.length - 1; i >= 0; i -= 1) {
      if (str.charCodeAt(i) > 255) {
        return 0;
      }
      int += str.charCodeAt(i) * multi;
      multi *= 256;
    }
  }

  //check sign of integer
  sign = int >>> 31 ? -1 : 1;
  //check exponent of integer
  exp = ((int >>> 23) & 0xff) - 127;
  //compute mantissa
  const mantissa = ((int & 0x7fffff) + 0x800000).toString(2);

  //convert mantissa binary to decimal
  for (i = 0; i < mantissa.length; i += 1) {
    float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
    exp--;
  }
  //return decimal with sign
  return float * sign;
};

const hex2float = (num) => {
  var sign = num & 0x80000000 ? -1 : 1;
  var exponent = ((num >> 23) & 0xff) - 127;
  var mantissa = 1 + (num & 0x7fffff) / 0x7fffff;
  return sign * mantissa * Math.pow(2, exponent);
};
/**
 * @module hex_conversion
 */
module.exports = {
  getParsedHexValue,
};
