import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/user");
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
  // const [users, setUsers] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [toggle, setToggle] = useState(false);
  // const refetch = () => {
  //   setToggle(!toggle);
  // };
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:3000/user")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoading(false);
  //       setUsers(data);
  //     });
  // }, [toggle]);
  // return { refetch, isLoading, users, setUsers };
};

export default useUser;
