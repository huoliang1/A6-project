/*
element-ui 组件相关
*/

import Vue from 'vue'
import { Pagination, MessageBox, Message,Button } from 'element-ui'

// 注册全局组件
Vue.component(Pagination.name, Pagination)  // el-pagination
Vue.component(Button.name, Button)
// 也可使用 Vue.use(Pagination)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message


/*
2中UI组件
1.标签组件  ==> 写对应的标签产生对应的界面效果 <el-pagination>
2.函数/对象组件  ==>执行函数或调用对象的方法出现对应的效果
*/
