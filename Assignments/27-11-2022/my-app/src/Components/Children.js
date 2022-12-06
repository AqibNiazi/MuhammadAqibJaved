import "./FamilyData.css";
const Children = (props) => {
  const children = props.Children;
  return (
    <ul className="children">
      <li>
        <span className="head">Name :</span> {children.name}
      </li>
      <li>
        <span className="head">Age :</span>
        {children.Age}
      </li>
      <li>
        <span className="head">Education :</span>
        {children.Education}
      </li>
      <li>
        <span className="head">University :</span>
        {children.University}
      </li>
    </ul>
  );
};
export default Children;
