/*编写自定义的JavaScript函数maskingKeyboard()，
在该函数中屏蔽键盘的回车键、退格键、F5键、Ctrl+N组合键、Shift+F10组合键*/
function maskingKeyboard(){

    var keyCode = event.keyCode ? event.keyCode 
    : event.which ? event.which : event.charCode;


    if(keyCode==8){
        //判断是否为退格键
        event.KeyCode=0;
        event.returnValue=false;
        alert("当前不允许使用退格键！");
    }

    if(KeyCode==13){
        //判断是否为回车键
        event.KeyCode=0;
        event.returnValue=false;
        alert("当前不允许使用回车键！");
    }

    if(KeyCode==116){
        //判断是否为F5键
        alert("it's F5");
        event.KeyCode=0;
        event.returnValue=false;
        alert("当前不允许使用F5刷新键！");
    }

    if((event.altKey)&&(KeyCode==37)||(KeyCode==39)){
        //判断是否为Alt+方向键←或方向键→￼
        event.returnValue=false;
        alert("当前设置不允许使用Alt+方向键←或方向键→");
    }

    if((event.ctrlKey)&&(KeyCode==78)){
        //判断是否为ctrl+N
        event.returnValue=false;
        alert("当前设置不允许使用Ctrl+N新建IE窗口");
    }

    if((event.shiftKey)&&(KeyCode==121)){
        //判断是不是shift+F10
        event.returnValue=false;
        alert("当前设置不允许使用shift+F10");
    }
}