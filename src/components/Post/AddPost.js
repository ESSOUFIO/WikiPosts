import "./Post.css";
import React, { useState } from "react";
import { useFirebase } from "../../firebase/useFirebase";
import { UI_Context } from "../../Context/UIContext";

const NewPostInit = {
  id: "",
  title: "",
  description: "",
};

const AddPost = () => {
  const [newPost, setNewPost] = useState(NewPostInit);
  const { addPost } = useFirebase();
  const { hideModal } = UI_Context();

  const inputHandler = ({ target }) => {
    setNewPost({ ...newPost, [target.id]: target.value });
  };

  //   IDinputRef.current.focus();

  const submit = async (e) => {
    e.preventDefault();
    hideModal();
    await addPost(newPost);
    setNewPost(NewPostInit);
  };

  return (
    <form className="form-group" onSubmit={submit}>
      <label htmlFor="id" className="form-label">
        ID:
      </label>
      <input
        type="text"
        id="id"
        className="form-control"
        value={newPost.id}
        autoComplete="off"
        onChange={inputHandler}
      />

      <label htmlFor="title" className="form-label">
        Title :
      </label>
      <input
        type="text"
        id="title"
        className="form-control"
        value={newPost.title}
        autoComplete="off"
        onChange={inputHandler}
      />

      <label htmlFor="description" className="form-label">
        Description :
      </label>
      <textarea
        className="form-control"
        id="description"
        rows="3"
        value={newPost.description}
        autoComplete="off"
        onChange={inputHandler}
      ></textarea>

      <button className="btn btn-success" type="submit">
        ADD
      </button>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={hideModal}
      >
        CANCEL
      </button>
    </form>
  );
};

export default AddPost;
