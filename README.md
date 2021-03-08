# hex_conversion

A package for conversion of hexadecimal string to the specified data type.

**hex_conversion APIs**

1. _getParsedHexValue(hexString, dataType)_

   Converts hexadecimal string to the specified 'dataType'.

   **Parameters**

   - hexString: hexadecimal string to be converted.
   - dataType: data type to which the hexadecimal string has to be converted.

   **Possible Conversions(from hex string)**

   1. _Float_(dataType = "FLOAT"): Floating point number.
   2. _Date_(dataType = "DATE"): Date(MM-DD-YYYY).
   3. _Int_(dataType = "INT"): 16-bit integer.
   4. _Time Of Day_(dataType = "TOD"): Time of day(unsigned integer in milliseconds, with zero equal to midnight).
   5. _Unsigned Int_(dataType = "UINT"): 32-bit unsigned integer.
   6. _Unisgned Short Int_(dataType = "USINT"): 8-bit short(small) integer.
   7. _Unsigned Large Int_(dataType = "UDINT_R"): 64-bit unsigned large integer.
   8. _Time_(dataType = "TIME"): Time(integer).

   **Example**

   ```
   const { getParsedHexValue } = require("hex_conversion");

   let hexString = "0x4378028f";
   let dataType = "FLOAT";

   let result = getParsedHexValue(hexString, dataType);
   console.log(result);
   ```

   **Output**

   248.01
