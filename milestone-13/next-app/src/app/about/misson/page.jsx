import { options } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(options);
  console.log(session);
  return <div>misonPage</div>;
}
