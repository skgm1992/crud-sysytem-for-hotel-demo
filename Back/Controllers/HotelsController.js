import Hotels  from '../Models/Hotel.js'

let SaveHotel = async (req,res)=>{
    let result = await Hotels.create(req.body);
    res.send({success : true , result})
}
let GetAllHotel = async (req,res)=>{
    let result = await Hotels.find();
    res.send({success : true , result})
}
let GetByIdHotel = async (req,res)=>{
    let id = req.params.id;
    let result = await Hotels.find({_id : id });
    res.send({success : true , result : result[0]})
}
let UpdateHotel = async (req,res)=>{
    let id = req.params.id;
    let result = await Hotels.updateMany({_id : id} , req.body);
    res.send({success : true , result})
}

let DeleteHotel = async (req,res)=>{
    let id = req.params.id;
    let result = await Hotels.deleteMany({_id : id});
    res.send({success : true , result})
}

export {SaveHotel,GetAllHotel,GetByIdHotel,UpdateHotel,DeleteHotel}