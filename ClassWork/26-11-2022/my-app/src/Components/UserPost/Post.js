function Post(props) {
  const post = props.post;
  return (
    <div>
      {post.map((post) => {
        return (
          <ul>
            <li>
             {post.description}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
export default Post;
