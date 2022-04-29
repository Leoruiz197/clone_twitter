const User = require("../model/User");

const findByEmailUserService = async (email) => await User.findOne({ email: email });

const createUserService = async (body) => await User.create(body);

const findAllUserService = async () => await User.find();

const  findByIdUserService  = async (idUser) => await User.findById(idUser);

module.exports = { 
    findByEmailUserService, 
    createUserService, 
    findAllUserService, 
    findByIdUserService
};