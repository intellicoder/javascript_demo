//有三种方法创建对象
//对象直接量
var empty={};   //没有任何属性的对象
var point={x:0,y:0};    //两个属性
var point2={x:point.x,y:point.y};   //更复杂的值
var book={
    "main title":"JavaScript",  //属性名字有空格，必须用字符串
    'sub-title':"The Definitive Guide", //属性名字有连字符，必须用字符串
    "for":"all audiences",  //for是保留字，因此必须用引号
    author:{
        firstname:"David",
        surname:"Flanagan"
    }
};

alert(book.author.firstname);

//对象直接量是一个表达式，
//这个表达式的每次运算都创建并初始化一个新的对象。
//每次计算对象直接量的时候，也都会计算它的每个属性的值。也就是说，
//如果在一个重复调用的函数中的循环体内使用了对象直接量，它将创建很多新对象，
//并且每次创建的对象的属性值也有可能不同。

//通过new运算符创建对象

var o=new Object(); //创建一个空对象，和{}一样
var a=new Array();  //创建一个空数组，和[]一样
var d=new Date();   //创建一个表示当前时间的Data对象
var r=new RegExp(); //创建一个可以进行模式匹配的RegExp对象

//Object.create(),通过原型继承创建对象
//ECMAScript 5定义了一个名为Object.create（）的方法，
//它创建一个新对象，其中第一个参数是这个对象的原型。
//Object.create（）提供第二个可选参数，用以对对象的属性进行进一步描述。
var o1=Object.create({x:1,y:2});    //o1继承了属性x和y

//可以通过传入参数null来创建一个没有原型的新对象，
//但通过这种方式创建的对象不会继承任何东西，
//甚至不包括基础方法，比如toString（）
var o2=Object.create(null); //o2不会继承任何属性和方法

//如果想创建一个普通的空对象（比如通过{}或new Object（）创建的对象），
//需要传入Object.prototype：
var o3=Object.create(Object.prototype);

//例子，通过原型继承创建一个新对象
// inherit（）返回了一个继承自原型对象p的属性的新对象￼
// 这里使用ECMAScript 5中的Object.create（）函数（如果存在的话）￼
// 如果不存在Object.create（），则退化使用其他方法￼
function inhrerit(p){
    if(p==null) throw TypeError();  //P是一个对象但不能是null
    if(Object.create){  //如果Object.create存在
        return Object.create(p);    //直接使用它
    }
    var t=typeof p; //否则进行进一步的类型检测
    if(t!="object"&&t!="function") throw TypeError();
    function f(){}; //定义一个空的构造函数
    f.prototype=p;  //将其原型属性设为p
    return new f(); //使用f()创建p的继承对象
}

/*inherit（）函数的其中一个用途就是防止库函数无意间（非恶意地）
修改那些不受你控制的对象。不是将对象直接作为参数传入函数，
而是将它的继承对象传入函数。当函数读取继承对象的属性时，
实际上读取的是继承来的值。如果给继承对象的属性赋值，
则这些属性只会影响这个继承对象自身，而不是原始对象：
￼*/
var o={x:"don't change this value"};
library_function(inhrerit(o));  //防止对o的意外修改

