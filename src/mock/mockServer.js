/*
使用mockjs来mock接口
*/

import Mock from 'mockjs'
import banners from './banners'  //引用json文件 (json)数组,得到对应的js数组
import floors from './floors'
import recommends from './recommends'
//模拟返回的banners数据接口
Mock.mock('/mock/banners',{code:200,data: banners})

// 模拟返回floors数据接口
Mock.mock('/mock/floors',{code:200,data: floors})

// 模拟返回recommends数据接口
Mock.mock('/mock/recommends',{code:200,data: recommends})


//  export default  不需要暴露
console.log('mockserver...');
