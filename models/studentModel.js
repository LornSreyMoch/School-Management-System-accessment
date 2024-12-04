import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    IDCard: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    }, 
    classId: {
        type: String,
        required: true
    },
}, {
	timestamps: true,
});

const Student = mongoose.model('Students', studentSchema);

export default Student;