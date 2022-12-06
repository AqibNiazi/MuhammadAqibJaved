import "./FamilyData.css";
const Parents=({parentsData})=>{
const {fatherName,Fatherage,motherName,Motherage,Relationship,ResidentCity}=parentsData;
return (
    <div>
        <ul className="parent">
        <li><span className="head">Father Name :</span> {fatherName}</li>
        <li><span className="head">Father Age :</span> {Fatherage}</li>
        <li><span className="head">Mother Name :</span> {motherName}</li>
        <li><span className="head">Mother Age :</span> {Motherage}</li>
        <li><span className="head">Resident City :</span> {ResidentCity}</li>
        <li><span className="head">Relationship :</span> {Relationship}</li>
        </ul>
    </div>
)
}
export default Parents;