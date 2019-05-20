// function fun1(){
//     return "welcome to named functions..!";
// };
// document.write(fun1+"<br>");
// document.write(fun1());
// function fun_one(sub_one:string, sub_two:string, sub_three:string):void{
//     document.write(sub_one+"<===>"+sub_two+"<===>"+sub_three+"<br>");
// }
// fun_one('Angular8', "Nodejs", "MongoDB");
// fun_one('VueJS', 'NodeJS', 'Mysql');
// fun_one('Reactjs', 'Nodejs', 'Cassandra');
// function _meanStack(arg1:string, arg2:string, arg3:string):void{
//     document.write(arg1+"===="+arg2+"==="+arg3);
// };
// function _clientSub():string{
//     return "Angular8";
// };
// function _serverSub():string{
//     return "Nodejs";
// };
// function _backendSub():string{
//     return "MongoDb";
// };
// _meanStack(_clientSub(), _serverSub(), _backendSub());
// let my_array:Array<any> = [];
// function myFun():string{
//     return "Hello";
// }
// for(let i:number=0; i<5; i++){
//     my_array.push(myFun());
// }
// document.write(my_array.length+"<br>");
// my_array.forEach((element,index)=>{
//     document.write(element+"==="+index+"<br>");
// });
function fun_one() {
    return fun_two;
}
;
function fun_two() {
    return "welcome....!";
}
;
document.write(fun_one + "<br>");
document.write(fun_one() + "<br>");
document.write(fun_one()());
