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



class class_one{
    public myFun():any{
        return new class_two();
    };
};
class class_two{
    public myFun():void{
        document.write("Dependency injection soon...");
    };
};
new class_one().myFun().myFun();