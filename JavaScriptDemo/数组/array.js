//创建数组的方式
//使用这种方式创建数组，你将得到一个长度为0的空数组。
var numbers=[];
alert(numbers.length);

//一种方式是在声明数组变量时，直接在[]操作符内放入一组元素
var numbers0=[0,1,2,3,4,5,];
for(var a in numbers0){
    document.write(a+"</br>");
}

function show(a){
    for(var n in a){
        document.write(n+"</br>");
    }
}

//还可以调用Array的构造函数创建数组
var numbers1=new Array();
alert("numbers1的长度:"+numbers1.length);

//同样，可以为构造函数传入一组元素作为数组的初始值
var numbers2=new Array(0,1,2,3,4,5,6);
show(numbers2);

//最后，在调用Array的构造函数时，可以只传入一个参数，用来指定数组的长度
var numbers3=new Array(10);
alert("the length of numbers3:"+numbers3.length);

//在脚本语言里很常见的一个特性是，
//数组中的元素不必是同一种数据类型，这一点和很多编程语言不同
var objects=[1,"zhuzhi",true,null];

//可以调用Array.isArray()来判断一个对象是否是数组
alert(Array.isArray(objects));



