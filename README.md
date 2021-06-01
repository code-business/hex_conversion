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

Steps to publish package:

1. Make necessary changes to code and push.
2. On cmd, put "npm login"
3. It will then ask for username, password, and OTP.
   Username: gautam031098
   Password: gautamnaik@336699
   Email Id: gautam.naik1998@gmail.com
   4.Then change version by running command: npm version patch/minor/major
   patch: for backward compatible bug fixes=> 1.0.0 to 1.0.1
   minor: for backward compatible new features=> 1.0.0 to 1.1.0
   major: for changes that break backward compatibility=> 1.0.0 to 2.0.0
4. Finally run command "npm publish". Here it will ask for OTP and then package will get published.
5. Update the version of package wherever you are using the package in your project and then deploy.
