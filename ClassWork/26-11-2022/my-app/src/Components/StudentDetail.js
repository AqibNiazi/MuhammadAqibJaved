function StudentDetails(props){
     const {
      name,
      age,
      education:{degree:{course:{value:courseName}}},
      education:{degree:{year:{value:EducationYear}}},
      address:{country:{city:{street:{value:Streetaddress}}}},
     

    }=props.student;
return (
    <div>
        My name is {name}.My age is {age}.I have completed {courseName} in {EducationYear}.I live in {Streetaddress} street {""} {""}. 
    </div>
)
}
export default StudentDetails;