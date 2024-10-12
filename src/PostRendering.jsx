import { useEffect, useState } from "react";
import "./App.css"

function PostRendering() {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoad(false);
      });
  }, []);

  return (
    <>
      {load ? (
        <p style={{fontSize:"100px"}}>Loading...🌍</p>
      ) : (
        <ul>
          {post.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostRendering;
