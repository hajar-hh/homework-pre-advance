import mongoose from 'mongoose';  

const directorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Directory = mongoose.model('Directory', directorySchema);

export default Directory;  
