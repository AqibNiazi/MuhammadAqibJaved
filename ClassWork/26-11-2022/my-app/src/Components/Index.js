import Parent from "./parent"
import StudentDetails from "./StudentDetail";
import Animal from "./Animal";
function WelcomeUser() {
  let user = {
    id: 229,
    name: "Admin",
    age: 23,
    education: {
      degree: {
        course: {
          value: "BSSE",
        },
        year: {
          value: 2022,
        },
      },
    },
    address: {
      country: {
        value: "PK",
        city: {
          value: "RWP",
          street: {
            value: 14,
          },
        },
      },
    },
  };

  return (
    <div>
      <StudentDetails student={user} />
      <Animal animal={"cat"} />
      <Parent/>
    </div>
  );
}
export default WelcomeUser;
