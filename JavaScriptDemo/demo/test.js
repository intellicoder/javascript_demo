v = 45;
alert(v);

function sayHello(o) {
    document.write("姓名:" + o.name + " " + "年龄:" + o.age + "</br>");
}

var obj = new Object();

obj.name = "zhuzhi";
obj.age = 20;

sayHello(obj);

function fun(a) {
    console.log("a=" + a);
    //a(obj);
}

//函数参数也可以是函数

fun(sayHello);

fun(function () { alert("Hello") });

//函数返回值可以是任意数据类型，甚至是一个函数

function fun3() {
    function fun4() {
        alert("我是fun4");
        return 3;
    }
    return fun4();
}

var a = fun3();

alert(a);

a();

(function () {
    alert("我是立即执行函数");
})();