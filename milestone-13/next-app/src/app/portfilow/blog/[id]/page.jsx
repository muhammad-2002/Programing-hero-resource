export default function page({ params }) {
  console.log(params);
  const { name, email, age } = dummyData.find((item) => item.id == params.id);

  return (
    <div>
      <div className=" bg-green-900 p-3 ">
        <h1>{name}</h1>
        <h1>{age}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
    phoneNumbers: ["555-1234", "555-5678"],
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
    phoneNumbers: ["555-8765", "555-4321"],
    isActive: false,
  },
  {
    id: 3,
    name: "Emily Johnson",
    age: 22,
    email: "emily.johnson@example.com",
    phoneNumbers: ["555-9876", "555-6543"],
    isActive: true,
  },
  {
    id: 4,
    name: "Michael Brown",
    age: 45,
    email: "michael.brown@example.com",
    phoneNumbers: ["555-3210", "555-0987"],
    isActive: false,
  },
  {
    id: 5,
    name: "Sarah Davis",
    age: 30,
    email: "sarah.davis@example.com",
    phoneNumbers: ["555-1122", "555-3344"],
    isActive: true,
  },
];
