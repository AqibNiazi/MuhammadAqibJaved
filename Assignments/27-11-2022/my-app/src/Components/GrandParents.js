import "./FamilyData.css"
const GrandParent=({GrandparentData})=>{
    const {GrandfatherName,Grandfatherage,GrandMotherName,GrandMotherAge,ResidentCity,Relation}=GrandparentData;
return (
<div>
 <ul className="GrandParents">
    <li>Grand father Name:{GrandfatherName}</li>
    <li>Grand father Age:{Grandfatherage}</li>
    <li>Grand Mother Name:{GrandMotherName}</li>
    <li>Grand Mother Age:{GrandMotherAge}</li>
    <li>Resident City:{ResidentCity}</li>
    <li>Relationship:{Relation}</li>
 </ul>
</div>
)
}
export default GrandParent;