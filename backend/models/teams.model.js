const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const teamSchema=new Schema({
    teamname:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    }
});

const Team=mongoose.model('Team',teamSchema);

module.exports=Team;