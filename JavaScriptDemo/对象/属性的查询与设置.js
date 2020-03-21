//可以通过点(.)或方括号([])运算符来获取属性的值。
//运算符左侧应当是一个表达式，它返回一个对象。
//对于点(.)来说，右侧必须是一个以属性名称命名的简单标识符。
//对于方括号来说([])，方括号内必须是一个计算结果为字符串的表达式，
//这个字符串就是属性的名字￼
var book={
    "main title":"JavaScript",  //属性名字有空格，必须用字符串
    'sub-title':"The Definitive Guide", //属性名字有连字符，必须用字符串
    "for":"all audiences",  //for是保留字，因此必须用引号
    author:{
        firstname:"David",
        surname:"Flanagan"
    }
};

var author=book.author;
var name=author.surname;
alert(name);
var title=book["main title"];
alert(title);

//和查询属性值的写法一样，
//通过点和方括号也可以创建属性或给属性赋值，
//但需要将它们放在赋值表达式的左侧
book.edition=6; //给book创建一个名为"edition"的属性
book["main title"]="ECMAscript";    //给main title属性赋值
alert(book["main title"]);

//对象的关联数组
var addr={
    customer1:"zz1",
    customer2:"zz2",
    customer3:"zz3",
    customer4:"zz4"
};
for(var i=1;i<=4;i++){
    alert(addr["customer"+i]);
}

//in运算符：查询属性是否在该对象中
var obj=new Object();
obj.name="zhuzhi";
alert("name" in obj);

