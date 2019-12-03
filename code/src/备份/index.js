//导入css文件
import './style.css'
//导入less文件
import './demo.less'
//导入图片
import hzw from './images/hzw.jpg'
// + 导入错误的模块
// import error from "./error"
// 执行会报错的函数
// error();
//创建div元素
let elm = document.createElement('div')
elm.innerHTML =`<div class="aa">这里是css添加的效果</div>
<div class="box">
    <span>这里是less添加的效果</span>
</div>
<img src="${hzw}"/>`
document.body.append(elm)