/*********TIỀM HIỂU VỀ MODULES TRONG JS*********** */
/*
 >>>kHÁI NIỆM<<<
 => Modules trong ES6 (EcmaScript 2015) trong JavaScript là một cách để tạo và quản lý các
  module (đoạn mã) riêng lẻ để tăng tính tái sử dụng và quản lý mã trong dự án lớn. 
 => Modules cho phép bạn chia mã JavaScript thành các phần nhỏ có thể import và export giữa chúng. 
 => Điều này giúp tạo ra một cách cấu trúc dự án rõ ràng và giảm xung đột giữa các biến và hàm trong 
 dự án.

 => hai khái niệm export và import:
  #1/ import:
   -> Import là cách để chèn các phần của module đã được xuất từ một module khác
   -> có nhiều cách để import
    + Named Imports: Bạn có thể sử dụng cú pháp {} để import các thành phần đã được đặt 
    tên từ module khác
          vd:
             // trong file khác
            import { myVariable, myFunction } from './module1';

     + Default Import: Bạn có thể sử dụng cú pháp import để import default export từ 
     module khác.   
          vd:
            // trong file khác
            import myVariable from './module2';        


  #2/ export:
   ->  Export là cách để xuất ra một phần của module cho sử dụng bên ngoài.
   -> Có hai cách chính để xuất dữ liệu:
    + Named Exports: Bạn có thể đặt từ khóa export trước biến, hàm hoặc lớp mà
     bạn muốn xuất.
       vd:
         // trong module1.js
        export const myVariable = 42;
        export function myFunction() {
        //...
        }

    + Default Export: Bạn có thể đặt từ khóa export default trước một biến, hàm hoặc 
    lớp mà bạn muốn xuất mặc định. Một module chỉ có thể có một default export.
       vd:
          // trong module2.js
          const myVariable = 42;
          export default myVariable;

    <===> Lưu ý:
     + khi dùng export import modules trong js thì nhớ đoạn mã 
     <sccript trong html cần có type="module" nhá>

     vd:

         <script type="'module" src="../session18_ECMAScript6/Modules.js"></script>

*/

//sử dụng import tải cái file Modules1.js vào Modules.js
// cách import với export default
import logger from "./Modules1.js"

console.log(logger)
logger('test message', 'warn')







// import với các export kiểu name export
import { Type_log, Type_warn, Type_error } from "./Modules1.js"

console.log(Type_log)
console.log(Type_warn)
console.log(Type_error)