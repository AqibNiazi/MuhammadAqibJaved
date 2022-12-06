import GrandParent from "./GrandParents";
import Parents from "./Parents";
import Uncle from "./Uncle"
import Children from "./Children";
const FamilyData=()=>{
    const familyData={
        Grandparents:{
            GrandfatherName:"Gul Muhammad",
            Grandfatherage:75,
            ResidentCity:"Mianwali",
            GrandMotherName:"Hazoor Bibi",
            GrandMotherAge:73,
            Relation:"Grand parents"
        },
        parents:{
            fatherName:"Said Muhammad",
            Fatherage:56,
            Relationship:"parents",
            motherName:"Maher Bhari",
            Motherage:50,
            ResidentCity:"Talagang",
            
        },
        Uncle:{
            UncleName:"Ramzan Khan",
            UncleAge:53,
            ResidentCity:"Mianwali",
            Relation:"Uncle",
            AuntName:"Naseem fatima", 
            Auntage:49,   
        },
        children:[
            {
                name:"Muhammad Saqib",
                Age:25,
                Education:"Msc Mathematics",
                University:"Punjab University"
            },
            {
                name:"Muhammad Aqib Javed",
                Age:23,
                Education:"Bsc software",
                University:"Uet Taxila"
            },
            
            {
                name:"Bilal",
                Age:22,
                Education:"Bsc Physics",
                University:"Sargodha University"
            },
            {
                name:"Muhammad Usman",
                Age:21,
                Education:"Bsc Computer",
                University:"Uet Taxila"
            }
        ]  
}
const children=familyData.children;
return (
    <div>
<GrandParent GrandparentData={familyData.Grandparents}/>
<Parents parentsData={familyData.parents}/>
<Uncle uncleData={familyData.Uncle}/>
{
    children.map((children)=>{
        return <Children Children={children}/>
    }) 
}

    </div>
)
}
export default FamilyData;