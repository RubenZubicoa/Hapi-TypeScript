import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";

import User from "../models/User";

export const createUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = new User(req.payload);
        const userSaved = await user.save();
        return res.response(userSaved);
    } catch (error) {
        return res.response(error).code(500)
    }
}

export const getUsers = async (req:Request, res:ResponseToolkit):Promise<ResponseObject> => {
    try {
        const users = await User.find();
        return res.response(users);
    } catch (error) {
        return res.response(error).code(500)
    }
}

export const getUser = async(req:Request, res:ResponseToolkit):Promise<ResponseObject> => {
    try {
        const user = await User.findById(req.params.id);
        if(user){
            return res.response(user)
        }else{
            return res.response().code(404)
        }
    } catch (error) {
        return res.response(error).code(500)
    }
}

export const deleteUser = async(req:Request, res:ResponseToolkit):Promise<ResponseObject> => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(user){
            return res.response(user);
        }else{
            return res.response().code(404)
        }
    } catch (error) {
        return res.response(error).code(500)
    }
}

export const updateUser = async(req:Request, res:ResponseToolkit):Promise<ResponseObject> => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.payload, {new: true});
        if(user){
            return res.response(user)
        }else{
            return res.response().code(404)
        }
    } catch (error) {
        return res.response(error).code(500)
    }
}