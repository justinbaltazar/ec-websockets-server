import Note from '../models/note_model';


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  return Note.findByIdAndDelete(id);
};

export const createNote = (fields) => {
  // you know the drill. create a new Note mongoose object
  // return .save()
  const newNote = new Note();
  newNote.title = fields.title;
  newNote.x = fields.x;
  newNote.y = fields.y;
  newNote.zIndex = fields.zIndex;
  newNote.text = fields.text;
  return newNote.save();
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
