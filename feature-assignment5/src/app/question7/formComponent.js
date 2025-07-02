'use client'
import axios from "axios";
import { useState } from "react";

const UserForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: content,
          userId: 1,
        }
      );
      console.log("post submitted", response.data);
      setStatus("success");
      setTitle("");
      setContent("");
    } catch (err) {
      console.log("submission error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post:</h2>
      <label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        Title:
      </label>
      <br />
      <label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        Content :
      </label>
      <button type="submit">Submit</button>
      {status === "success" && <p>Post Submitted successfully</p>}
      {status === "error" && <p>Error submitting post</p>}
    </form>
  );
};
export default UserForm;