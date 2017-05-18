//设置空数组用来保存窗口resize前后高度 
var heightArr=[];
var bodyHeight = document.body.offsetHeight;
var bodyWidth = document.body.clientWidth;
var title = document.getElementsByClassName("title");
var titleWidth = title[0].offsetWidth;
var docOffset = 0;
var objHolder = '';
var keyArr = [];
heightArr.push(bodyHeight);
// 获取相册信息
htmlobj=$.ajax({url:"/get-all-photos",async:false});

var len;
var obj;
var count = 0;
//判断当前页面
if(window.location.pathname == "/src/photo/travel/"){
	len = Object.getOwnPropertyNames(htmlobj.responseJSON.旅行).length;
	obj = htmlobj.responseJSON.旅行;
    for(key in obj){
    	count++;
//  	(count == 1 || count%3 == 0)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,1):(count == 2 || count%3 ==1)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,2):(count == 3 || count%3 ==2)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,3)
		if(count == 1 || count%3 == 0){
			insertHtml(obj[key][0],obj[key].length,key,1);
		}else if(count == 2 || count%3 ==1){
			insertHtml(obj[key][0],obj[key].length,key,2);
		}else{
			insertHtml(obj[key][0],obj[key].length,key,3);
		}
    }
}else if(window.location.pathname == "/src/photo/photography/"){
    len = Object.getOwnPropertyNames(htmlobj.responseJSON.人物).length;
	obj = htmlobj.responseJSON.人物;
    for(key in obj){
    	count++;
//  	(count == 1 || count%3 == 0)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,1):(count == 2 || count%3 ==1)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,2):(count == 3 || count%3 ==2)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,3)
		if(count == 1 || count%3 == 0){
			insertHtml(obj[key][0],obj[key].length,key,1);
		}else if(count == 2 || count%3 ==1){
			insertHtml(obj[key][0],obj[key].length,key,2);
		}else{
			insertHtml(obj[key][0],obj[key].length,key,3);
		}
    }
}else if(window.location.pathname == "/src/photo/nature/"){
    len = Object.getOwnPropertyNames(htmlobj.responseJSON.自然).length;
	obj = htmlobj.responseJSON.自然;
    for(key in obj){
    	count++;
//  	(count == 1 || count%3 == 0)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,1):(count == 2 || count%3 ==1)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,2):(count == 3 || count%3 ==2)?
//  		insertHtml(obj[key][0],obj[key].length,"cover"+key,3)
		if(count == 1 || count%3 == 0){
			insertHtml(obj[key][0],obj[key].length,key,1);
		}else if(count == 2 || count%3 ==1){
			insertHtml(obj[key][0],obj[key].length,key,2);
		}else{
			insertHtml(obj[key][0],obj[key].length,key,3);
		}
    }
}

//html模板
function insertHtml(a,b,c,d){
//	(d==1)?
//	$(".arr:first").append("<a id="+c+"class='cover'></a>"):(d==2)?
//	$(".arr:first").next.append("<a id="+c+"class='cover'></a>"):(d==3)?
//	$(".arr:last").append("<a id="+c+"class='cover'></a>");
	if(d==1){
		$(".arr:first").append("<a id='"+c+"' class='cover'></a>");
	}else if(d==2){
		$(".arr:first").next().append("<a id='"+c+"' class='cover'></a>");
	}else{
		$(".arr:last").append("<a id='"+c+"' class='cover'></a>");
	};
    $("#"+c+"").append(`
        <div>
            <img class="cover-img" src="`+a+`"/>
            <div class="data">
                <h3>sport</h3>
                <p>grey vdwiel</p>
            </div>
        </div>
        <div class="sharing">
            <div class="share share-gplus"></div>
            <div class="share share-twitter"></div>
            <div class="share share-fb"></div>
        </div>
        <div class="overlay">
            <div class="inside">
                <div class="losange">
                    <span>`+b+`</span>
                    pics
                </div>
                <p>
                    view
                </p>
            </div>
        </div>
        `);
}

// 封面图片类
var img = {
    height : Math.floor((title[0].offsetHeight)/3*100)/100,
    item : document.getElementsByClassName("cover-img"),
};

// 大于768px时添加照片的属性
function mdCoverHeight(){
    title[0].style.width = title[0].offsetHeight+"px";
    try{
        for(var i=0,arr=img.item.length;i<=arr;i++){
            img.item[i].style.height=img.height+"px";
        }
    }catch(err){
        return true;
    }
};
// 小于768px时添加属性
function smCoverHeight(){
    this.title[0].style.float="none";  
    try{
        for(var i=0,arr=img.item.length;i<=arr;i++){
            img.item[i].style.height=this.bodywidth+"px";
        }
    }catch(err){
        return true;
    }
};

// 判断设备宽度
if(bodyWidth>768){
    // 当窗口改变触发函数
    function resizing(){
        this.bodyHeight = document.body.offsetHeight;
        if(this.heightArr.length == 1){
            this.heightArr.push(this.bodyHeight);
        }else{
            this.heightArr.pop();
            this.heightArr.push(this.bodyHeight);
        }
        // title的长宽比
        var titleScale = this.heightArr[1]/this.heightArr[0];
        this.title[0].style.width = this.titleWidth*titleScale+"px";
        // console.log("缩放比例"+titleScale);
        // console.log("初始高度"+this.titleWidth);
        // console.log("计算后高度"+this.title[0].style.width);
        // console.log("-------------------------------");
    }
    mdCoverHeight();
    // 滚轮监听事件
    document.onmousewheel=function(e){
        var _self = window;
        _self.docOffset += e.deltaY/2;
        $(document).scrollLeft(_self.docOffset);
    };
}else{
    document.getElementsByClassName("container")[0].style.width="auto";
}

// 当点击封面，获取封面的index，获取相册数组并保存，跳转，遍历。
var page = window.location.pathname.split("/")[3];
$(".container").delegate("a","click",function(){
	{
		window.location.href = "/src/photo/component.html?page="+page+"&"+"photo="+this.id;
	}
})
