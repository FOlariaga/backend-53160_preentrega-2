import usersModel from "./models/users.model.js";

class UsersManager {

    async get() {
        const users = await usersModel.find().lean()
        return users
    }

    async getById(idUser) { 
        const user = await usersModel.find({_id : idUser}).lean()
        return user
    }

    async add(data) {
        const newUser = await usersModel.create(data)
        return newUser
    }


    async update(filter, update, options) {
     const user = await usersModel.findOneAndUpdate(filter, update, options);
     return user
    }

    async delete(idUser) {
        try {
            const user = await usersModel.findOneAndDelete(idUser);
            console.log(user);
        } catch (error) {
            
        }
    }
}
export default UsersManager