import mongoose, { Schema } from 'mongoose';


/* const NoteSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  tags: String,
  cover_url: String,
}); */

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
});

// create NoteModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
