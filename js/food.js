/*食物*/
//ES6:class
class Food{
    //构造函数
    constructor({width=20,height=20，x=0,y=0,bgColor="#0f0"}={}){
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bgColor=bgColor;
        this.dom=null;
        this.map=null;//当前食物所关联的地图对象
    }

    //创建DOM元素
    createDom(){
        //创建div元素
        this.dom=document.createElement("div");
        //设置css属性
        Tools.css(this.dom,{
            width:this.width+"px",
            height:this.height+"px",
            position:"absolute",
            left:this.x*this.width+"px",
            top:this.y*this.height+"px",
            background:this,bgColor
        });
        //将食物添加到地图中
        this,map.addRole(this);
    }

    //改变在地图中的定位位置
    changePosition(){
        //计算地图中国可分的行列
        const rows=this.map.height/this.hright,
            cols=this.map.width/this.width;
        //随机生成在地图中的定位坐标
        this.x=Math.floor(Math.random()*cols);
        this.y=Math.floor(Math.random()*rows);
        //设置DOM元素CSS定位
        Tools.css(this.dom,{
            left:this.x*this.width+"px",
            top:this.y*this.height+"px"
        });
    }
}
