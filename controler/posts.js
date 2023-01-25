import Photo from "../models/photo.js"

export const getPhotos = async(req,res) => {
    try {
        const photos = await Photo.find();
        res.status(200).json(photos);
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}
export const addPhoto = async (req,res) => {
    const {url} = req.body;
    const newPhoto = new Photo({url})
    try {
      await newPhoto.save();
      res.status(201).json(newPhoto)
    } catch (err) {
        res.status(409).json({message:err.message})
    }
}
export const editPhoto = (req,res) => {
    res.send('HAyyyyyyyyyy')
    console.log('delete')
}
export const deletePhoto =  async(req,res) => {
    const id = req.params.id

    try{
        await Photo.findOneAndDelete({_id: id});
        res.status(200).send("photo deleted successfully")
    }catch(err){
        res.status(409).json({error:err.message})
    }
    
    
    console.log(id)


}