import React, { useEffect, useState } from "react";
import Note from "./Note";
import InputNote from "./InputNote";
import { v4 as uuidv4 } from "uuid";
export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setTextInput] = useState("");

  const textHandler = (e) => {
    setTextInput(e.target.value);
  };

  const addHandler = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text: inputText,
      },
    ]);
    setTextInput("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    data && setNotes(data);
  }, []);

  useEffect(() => {
    notes.length > 0 && localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    notes.length === 0 && localStorage.removeItem("Notes");
  }, [notes]);

  return (
    <>
      <div className=" max-w-[960px] mx-auto sm:px-5 box-border">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                text={note.text}
                deleteNote={deleteNote}
              />
            );
          })}
          <InputNote
            textHandler={textHandler}
            addHandler={addHandler}
            inputText={inputText}
          />
        </div>
      </div>
    </>
  );
}
