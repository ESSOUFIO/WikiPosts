import "./App.css";
import React, { Fragment } from "react";
import ListPosts from "./components/Post/ListPosts";
import Modal from "./components/Modal/Modal";
import AddPost from "./components/Post/AddPost";
import { UI_Context } from "./Context/UIContext";
import InputFiltre from "./components/Filtre/InputFiltre";
import SearchWiki from "./components/Wiki/SearchWiki";

const App = () => {
  const { showModal, modalContent } = UI_Context();

  const ModalContent = () => {
    if (modalContent === "AddPost") {
      return <AddPost />;
    } else if (modalContent === "AddPostWiki") return <SearchWiki />;
  };

  return (
    <Fragment>
      <div className="App container">
        <h1>Wiki Posts</h1>
        <button
          className="btn btn-success"
          onClick={() => showModal("AddPost")}
        >
          Add Post
        </button>
        <button
          className="btn btn-success"
          onClick={() => showModal("AddPostWiki")}
        >
          Add Post from Wiki
        </button>
        <br />
        <InputFiltre />
        <ListPosts />
      </div>
      <Modal>
        <ModalContent />
      </Modal>
    </Fragment>
  );
};

export default App;
