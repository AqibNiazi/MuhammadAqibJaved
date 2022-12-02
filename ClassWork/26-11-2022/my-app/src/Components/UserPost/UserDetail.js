import User from "./User";
import Post from "./Post";
function UserDetail() {
  const user = {
    userName: "Aqib Javed",
    Address: "Chakwal",
    age: 23,
    post: [
      { id: 1, description: "This post is about React" },
      { id: 2, description: "This post is about Node" },
      { id: 3, description: "This post is about Express" },
    ],
  };
  return <div>
    <User info={user}/>
    <Post post={user.post}/>
  </div>;
}
export default UserDetail;
