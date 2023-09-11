import { User } from "../models/User.js"

export const getUsers = async(req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id,
            },
        });

        if(!user) return res.status(404).json({message: 'User does not exists'})

        res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }
}

export const createUsers = async (req, res) => {
    const {name, lastName, email, phoneNumber} = req.body

    try {
        const newUser = await User.create({
            name: name, 
            lastName: lastName,
            email: email,
            phoneNumber:phoneNumber
        })
    
        res.json(newUser)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName, email, phoneNumber } = req.body

        const user = await User.findByPk(id);
        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.phoneNumber = phoneNumber

        await user.save();

        res.json(user);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};