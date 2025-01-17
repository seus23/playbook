const User = require('./../models/user')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(User){
        return [User.id, User.username, User.name, "Sin bio"]
    }

    static updateUserUsername(User,message){
        User.username = message
        return User.username
    }

    static getAllUsernames(Users){
       let usernames = Users.map(user => user.username)
       return usernames

    }
}

module.exports = UserService