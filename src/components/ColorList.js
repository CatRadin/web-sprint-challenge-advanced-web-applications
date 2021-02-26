import React, { useState } from "react";
import axios from "axios";
import EditMenu from './EditMenu';

//Initial State Here for color and the hex code! --------------------------------
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [editedColor, setEditedColor] = useState(initialColor);

//Edit Color -----------------------------------------------------------------------
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
    setEditedColor(color);
  };

//Save the Edit ---------------------------------------
  const saveEdit = e => {
    e.preventDefault();
    updateColors(colors.map(color => color === editedColor ? colorToEdit : color));
    setEditing(false);
  };

  //Delete The Saved Color -------------------------------------------------
  const deleteColor = color => {
    updateColors(colors.filter(item => item !== color));
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && 
      <EditMenu 
      colorToEdit={colorToEdit} 
      saveEdit={saveEdit} 
      setColorToEdit={setColorToEdit} 
      setEditing={setEditing}/> }
    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.