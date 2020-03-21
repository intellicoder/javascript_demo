/*作用域
 *   --作用域指一个变量的作用范围
 *      
 */

 //JS中有两种作用域
 //1.全局作用域
 //     -直接编写在script标签中的JS代码，都在全局作用域
 //     -全局作用域在页面打开时创建，在页面关闭时销毁
 //     -在全局作用域中有一个全局对象window,我们可以直接使用
 //         -window对象代表一个浏览器的窗口，它由浏览器创建，我们可以直接使用
 //     -在全局作用域中，
 //          创建的变量都会作为window的属性保存
 //          创建的函数都会作为window对象的方法保存
 //     -全局作用域中的变量都是全局变量
 //          在页面的任意部分都可以访问得到。


 console.log(window); //全局对象，window
 var a=10;
 console.log(window.a);

 function fun(){
     document.write("I an fun");
 }
 
 window.fun();
 window.alert("zhuzhi");





 //2.局部作用域(函数作用域)
 //     -调用函数时创建函数作用域，函数执行完毕后函数作用域销毁
 //     -每调用一次就会创建一个新的函数作用域，他们之间是相互独立的。
 //     -在函数作用域中，可以访问到全局作用域的变量，但是反之，不成立。
 //     -当函数作用域操作一个变量时，它会先在自身的作用域中寻找(就近原则)，
 //         如果有则直接使用，如果没有，则向上一级作用域寻找。
 //         如果全局作用域中没有找到，就会报错，ReferenceError

 var b="全局b";
 function fun1(){
     var b="局部b";
     console.log(b);//此时输出局部b
 }

 //如果不想使用局部的b，可以这样写

function fun2(){
    var b="局部b";
    console.log(window.b);
}

//在函数作用域中，也有声明提前的特性
//使用var关键字声明的变量，会在函数中所有代码被执行前声明。
//函数声明，也会在函数中所有的代码执行之前执行。
function fun3(){
    fun4();
    console.log(b);
    var b=35;//输出结果为undefined
    function fun4(){
        alert("I am fun4");
    }
}

//在函数中，不使用var声明的变量都会成为全局变量。
function fun5(){
    //console.log("c="+c);//输出10
    c=10;
}

fun1();//当调用函数时，才会创建函数作用域

