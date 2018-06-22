/* 地图 */
//构造函数
function map({width=600,height=600,bgColor="#ccc"}={}) {
    this.width=width;
    this.height=height;
    this.dom=null;//地图在页面中对应的DOM元素
    this.bgColor=bgColor;
    this.createDom();//创建DOM元素
}

//原型
Map.prototype={
    constructor:Map,//构造函数
    //创建地图的DOM元素
    createDom:function(){
        //创建div元素
        this.dom=document.createElement("div");
        //设置css
        Tools.css(this.dom,{
            width:this.width+"px",
            height:this.height+"px",
            background:this.bgColor,
            position:"relative",
            margin:"0px auto"
        });
        //添加到body中显示
        document.body.appendChild(this.dom);
        },
    //添加游戏角色到地图中
    addRole:function(role){
        this.dom.appendChild(role.dom);
    }
};
