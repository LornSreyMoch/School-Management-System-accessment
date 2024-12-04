import studentModel from '../models/studentModel.js';

export const createStudent = async (req, res) => {
    try {
        const { IDCard, name, email, phone, classId, createAt, updateAt } = req.body;
        console.log(req.body);

        if(!IDCard || !name || !email || !phone || !classId){
            return res.status(400).json({ message: "Please fill in all fields"});
        }
        const newStuden = new studentModel({
            IDCard,
            name,
            email,
            phone,
            classId,
            createAt,
            updateAt,
        });
         const saveStuent = await newStuden.save();
         res.status(201).json(saveStuent);
        
    }  catch (error) {
        console.log(error);
        return res.status(500),json({ message: "Internal server error" });
    }
};


export const getStudent = async (req, res) => {
    try {
        const student = await studentModel.find();
        return res.status(200).json(student);
    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllStudent = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        return res.status(200).json(student);
    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const student = await studentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if(!student)
            return res.status(404).json({ message: "Student not found"});
        return res.status(200).json(student);
    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server not found"});
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete(req.params.id);
        if(!student)
            return res.status(400).json({ message: "venue not found"});
        res.status(200).json(student);
    } catch (error) {
        console.log(error, "error");
        res.status(500).json({ message: "Internal server not found" });
    }
};