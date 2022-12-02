function User(props) {
  const { userName, Address, age } = props.info;
  return (
    <div>
    <ul>
      <li>
      User Name:{userName}
      </li>
      <li>
      Address:{Address}
      </li>
      <li>
      Age:{age}
      </li>
    </ul>
     
    </div>
  );
}
export default User;
