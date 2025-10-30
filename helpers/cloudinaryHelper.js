const cloudinary = require ('../config/cloudinary');

const uploadToCloudinary = async (filePath)=>{
    try{
        const result = await cloudinary.uploader.upload(filePath);
    }catch(error){
        console.error('error while uploading to cloudinary', error)
        throw new Error('error while uploading to cloudinary')
    }

}


