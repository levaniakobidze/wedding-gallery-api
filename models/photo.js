import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
    url: String,
})
const Photo = mongoose.model('Photo',photoSchema);

export default Photo;