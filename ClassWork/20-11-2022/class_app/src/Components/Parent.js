import "./parent.css";
import Child from "./child";
const childObj=[{
    name:"M Aqib Javed",
    Age:23,
    Education:"BS Software",
    University:"UET Taxila"
},
{
    name:"M Saqib",
    Age:25,
    Education:"BS Mathematics",
    University:"NAMAL MIANWALI"
}]
function Parent(props){
return (
    <div className="Container">
  <table >
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Children</th>
            <th>City</th>
        </tr>
        <tr>
            <td>{props.parentDetail[0].name}</td>
            <td>{props.parentDetail[0].Age}</td>
            <td>{props.parentDetail[0].Children}</td>
            <td>{props.parentDetail[0].City}</td>
        </tr>
        <tr>
            <td>{props.parentDetail[1].name}</td>
            <td>{props.parentDetail[1].Age}</td>
            <td>{props.parentDetail[1].Children}</td>
            <td>{props.parentDetail[1].City}</td>
        </tr>

    </table>
   {childObj.map((elem)=>{

    return    <Child name={elem.name} Age={elem.Age} Education={elem.Education} University={elem.University}/>

    })}
    </div>
  
)
}
export default Parent;