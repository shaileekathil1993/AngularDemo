// class class_one{
//     private sub_one:string;
//     private sub_two:string;
//     private sub_three:string;
//     constructor(){
//         this.sub_one = "Angular8";
//         this.sub_two = "NodeJs";
//         this.sub_three = "MongoDB";
//     };
//     public getSubOne():string{
//         return this.sub_one;
//     };
//     public getSubTwo():string{
//         return this.sub_two;
//     };
//     public getSubThree():string{
//         return this.sub_three;
//     };
// };
// let obj:class_one = new class_one;
// document.write(obj.getSubOne()+"<br>"+obj.getSubTwo()+"<br>"+obj.getSubThree());
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.myFun = function () {
        return new class_two();
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.myFun = function () {
        document.write("Dependency injection soon...");
    };
    ;
    return class_two;
}());
;
new class_one().myFun().myFun();
