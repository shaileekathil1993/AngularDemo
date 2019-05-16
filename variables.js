var var_one = 100;
var var_two = 100.12345;
var var_three = 0xABCD1234;
var var_four = 668;
var var_five = 42;
document.write(var_one + "<br>" + var_two + "<br>" + var_three + "<br>" + var_four + "<br>" + var_five + "<br>");
var var_six = "Angular";
var var_seven = '8';
var var_eight = "" + var_six + var_seven;
document.write(var_six + "<br>" + var_seven + "<br>" + var_eight);
var var_nine = true;
document.write(var_nine + "<br>");
var var_ten = "welcome to Typescript";
document.write(var_ten + "<br>");
var num_one = [10, 20, 30, 40, 50];
var num_two = [60, 70, 80, 90, 100];
num_one.forEach(function (element, index) {
    document.write(element + "---" + index + "<br>");
});
num_two.forEach(function (element, index) {
    document.write(element + "---" + index + "<br>");
});
var str_one = ["AnglarJS", "Angular8", "Nodejs", "Reactjs", "Vuejs"];
var str_two = ["MongoDB", "Mysql", "Postgresql", "DB2"];
str_one.forEach(function (element, index) {
    document.write(element + "---" + index + "<br>");
});
str_two.forEach(function (element, index) {
    document.write(element + "---" + index + "<br>");
});
var het_one = [1, "AnglarJS", 2, "Angular8", 3, "Nodejs", 4, "Reactjs"];
het_one.forEach(function (element, index) {
    document.write(element + "----" + index + "<br>");
});
var products = [{ p_id: 111, p_name: "P_one", p_cost: "1000" }, { p_id: 222, p_name: "P_two", p_cost: "2000" }, { p_id: 333, p_name: "P_three", p_cost: "3000" }, { p_id: 444, p_name: "P_four", p_cost: "4000" }, { p_id: 555, p_name: "P_five", p_cost: "5000" }];
products.forEach(function (element, index) {
    document.write(element.p_id + "-----" + element.p_name + "------" + element.p_cost + "<br>");
});
