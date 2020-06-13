//fs用来读文件
const fs = require("fs")
//读数据库
const usersString = fs.readFileSync('./db/users.json').toString() //读取文件，把文件变成字符串
//把usersString转成对象数组
const usersArray = JSON.parse(usersString)

//添加数据库
const user3 = {name:"zheng",age:"21"}
usersArray.push(user3)
const string = JSON.stringify(usersArray) //文件只能添加字符串，把usersArray变成字符串
fs.writeFileSync('./db/users.json',string)//在./db/users.json填写string