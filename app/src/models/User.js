
const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
            if(user){
                if(user.id === client.id && user.psword == client.psword){
                    return {success: true};
                }
                return {sucess : false,msg:"비밀번호가 틀렸습니다."};
            }
            return { sucess : false, msg:"존재하지 않는 아이디입니다."};
        }catch(err){
            return { success: false , msg: err};
        }
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }
        catch (err){
            const a = { success:false, msg: err};
            return a;
        }
    }
}

module.exports = User;