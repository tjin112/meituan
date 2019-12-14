// import passport from 'koa-passport'
// import LocalStrategy from 'passport-local' 
// import UserModel from '../../dbs/models/users'
const passport = require('koa-passport')
const LocalStrategy = require('passport-local')//passport-local  策略
const UserModel = require('../../dbs/models/users')

// done 为回调
passport.use(new LocalStrategy(async function(username,password,done){
  //where 为 查询条件
  let where = {
    username
  };
  let result = await UserModel.findOne(where)
  if(result!=null){
    if(result.password===password){
      return done(null,result)
    }else{
      return done(null,false,'密码错误')
    }
  }else{
    return done(null,false,'用户不存在')
  }
}))
// 序列化动作 , 用户自动通过session 进入
//查到用户登陆成功之后 , 把数据存到session中
passport.serializeUser(function(user,done){
  done(null,user)
})

passport.deserializeUser(function(user,done){
  return done(null,user)
})

module.exports = passport
