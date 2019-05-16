var var_one:number = 100;
var var_two:number = 100.12345;
var var_three:number = 0xABCD1234;
var var_four:number = 0o1234;
var var_five:number = 0b101010;
document.write(var_one+"<br>"+var_two+"<br>"+var_three+"<br>"+var_four+"<br>"+var_five+"<br>");
var var_six:string = "Angular";
var var_seven:string = '8';
var var_eight:string=`${var_six}${var_seven}`;
document.write(var_six+"<br>"+var_seven+"<br>"+var_eight);
var var_nine:boolean= true;
document.write(var_nine+"<br>");
var var_ten:any="welcome to Typescript";
document.write(var_ten+"<br>");
var num_one:Array<number> = [10,20,30,40,50];
var num_two:number[] = [60,70,80,90,100];
num_one.forEach(function(element,index){
    document.write(element+"---"+index+"<br>");
});
num_two.forEach(function(element,index){
    document.write(element+"---"+index+"<br>");
});
var str_one:Array<string> = ["AnglarJS","Angular8","Nodejs","Reactjs","Vuejs"];
var str_two:string[] = ["MongoDB","Mysql","Postgresql","DB2"];
str_one.forEach(function(element,index){
    document.write(element+"---"+index+"<br>");
});
str_two.forEach(function(element,index){
    document.write(element+"---"+index+"<br>");
});
var het_one:Array<any> = [1,"AnglarJS",2,"Angular8",3,"Nodejs",4,"Reactjs"];
het_one.forEach(function(element,index){
    document.write(element+"----"+index+"<br>");
});
var products:any[] = [{p_id:111,p_name:"P_one",p_cost:"1000"},{p_id:222,p_name:"P_two",p_cost:"2000"},{p_id:333,p_name:"P_three",p_cost:"3000"},{p_id:444,p_name:"P_four",p_cost:"4000"},{p_id:555,p_name:"P_five",p_cost:"5000"}];
products.forEach(function(element,index){
    document.write(element.p_id+"-----"+element.p_name+"------"+element.p_cost+"<br>");
});
