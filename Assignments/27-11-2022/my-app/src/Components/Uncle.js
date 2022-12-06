import "./FamilyData.css"
const Uncle=({uncleData})=>{
const {UncleName,UncleAge,AuntName,Auntage,ResidentCity,Relation}=uncleData;
return (
<div>
<ul className="uncle">
        <li><span className="head">Uncle Name :</span>  {UncleName}</li>
        <li><span className="head">Uncle Age :</span> {UncleAge}</li>
        <li><span className="head">Aunt Name :</span> {AuntName}</li>
        <li><span className="head">Aunt Age  :</span> {Auntage}</li>
        <li><span className="head">Resident City :</span> {ResidentCity}</li>
        <li><span className="head">Relationship :</span> {Relation}</li>
        </ul>
</div>
)
}
export default Uncle;