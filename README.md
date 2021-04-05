# hex_conversion

A package for conversion of hexadecimal string to the specified data type.

**hex_conversion APIs**

1. _getParsedHexValue(hexString, dataType)_

   Converts hexadecimal string to the specified 'dataType'.

   **Parameters**

   - hexString: hexadecimal string to be converted.
   - dataType: data type to which the hexadecimal string has to be converted.

   **Possible Conversions(from hex string)**

   1. _Float_(dataType = "FLOAT"): 32/64 bit floating point number.
   2. _Real_(dataType = "REAL"): 32-bit single-precision floating point number.
   3. _LReal_(dataType = "LREAL"): 64-bit double-precision floating point number.
   4. _Date_(dataType = "DATE"): Date(MM-DD-YYYY).
   5. _Int_(dataType = "INT"): 16-bit integer.
   6. _Short Int_(dataType = "SINT"): 8-bit integer.
   7. _Signed Large Int_(dataType = "DINT"): 32-bit integer.
   8. _Time Of Day_(dataType = "TOD"): Time of day(unsigned integer in milliseconds, with zero equal to midnight).
   9. _Unsigned Int_(dataType = "UINT"): 32-bit unsigned integer.
   10. _Unisgned Short Int_(dataType = "USINT"): 8-bit short(small) integer.
   11. _Unsigned Large Int_(dataType = "UDINT"): 64-bit unsigned large integer.
   12. _Time_(dataType = "TIME"): Time(integer).
   13. _Word_(dataType = "WORD"): 16-bit unsigned integer.
   14. _Double Word_(dataType = "DWORD"): 32-bit unsigned integer.

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
