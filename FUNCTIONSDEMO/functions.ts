// function fun_one(...arg1:any):void{
//     arg1.forEach(element => {
//         if(element!=undefined && element!=""){
//             document.write(element);
//         }  
//     });
//     document.write("<br>"); 
// };
// fun_one();
// fun_one(undefined);
// fun_one("Angular8");
// fun_one("Angular8", "NodeJS");
// fun_one("Angular8","NodeJS","MongoDB");


// function fun_one(arg1:string,...arg2:string[]):void{
//     if(arg1!=undefined && arg1!=''){
//         document.write(arg1);
//     };
//     if(arg2[0]!=undefined && arg2.length!=0){
//         document.write(""+arg2);
//     };
//     document.write("<br>");
// };
// fun_one(undefined);
// fun_one(undefined,"Hello1","Hello2");
// fun_one("hello1");
// fun_one("hello1",undefined);
// fun_one(undefined,undefined);


// function fun_one(sub1:string="Angular8",sub2:string="Nodejs",sub3:string="MongoDB"){
//     document.write(sub1+"...."+sub2+"...."+sub3+"<br>");
// };
// fun_one();
// fun_one("ReactJS");
// fun_one(undefined,undefined,"Mysql");


// function fun_one(arg1:string,arg2:string="Hello2"){
//     document.write(arg1+",,,,"+arg2+"<br>");
// };
// fun_one("Hello1");
// fun_one("Hello1",undefined);


// function fun_one(arg1:string,arg2:string="Hello2",...arg3:string[]){
//     document.write(arg1+"...."+arg2+"...."+arg3+"<br>");
// };
// fun_one(undefined);
// fun_one("Hello1");
// fun_one("Hello1",undefined,"Hello3");


// function fun_one(arg1?:string,arg2?:string,arg3?:string){
//     if(arg1!=undefined){
//         document.write(arg1);
//     };
//     if(arg2!=undefined){
//         document.write(arg2);
//     };
//     if(arg3!=undefined){
//         document.write(arg3);
//     };
//     document.write("<br>");
// };
// fun_one();
// fun_one("","Angular8");
// fun_one("Angular8","NodeJS");
// fun_one("Angular8","Nodejs","MongoDB");


// function fun_one(arg1:string,arg2?:string):void{
//     if(arg1!=undefined){
//         document.write(arg1);
//     };
//     if(arg2!=undefined){
//         document.write(arg2);
//     };
//     document.write("<br>");
// };
// fun_one("Hello");
// fun_one(undefined,"Hello");


// function fun_one(arg1?:string,arg2:string="Hello"):void{
//     if (arg1!=undefined){
//         document.write(arg1);
//     };
//     if (arg2!=undefined){
//         document.write(arg2);
//     };
//     document.write("<br>");
// };
// fun_one("Hello");
// fun_one(undefined);
// fun_one(undefined,"Welcome");


// function fun_one(arg1?:any,...arg2:any):any{
//     document.write(arg1+"..."+arg2+"<br>");
// };
// fun_one();
// fun_one(undefined);
// fun_one(undefined,undefined);
// fun_one("Hello");
// fun_one("Hello","Hello");


function fun_one(regular:any,default1:any="Hello",option?:any,...rest:any):void{
    document.write(regular+"..."+default1+"..."+option+"..."+rest+"<br>");
};
fun_one(undefined);
fun_one(undefined,undefined,"","Welcome");


