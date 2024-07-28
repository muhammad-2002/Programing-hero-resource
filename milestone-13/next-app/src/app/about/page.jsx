import Link from "next/link";

export default function page() {
  return (
    <div className="flex gap-3">
      <Link href={"/about/misson"}>Misson</Link>
      <Link href={"/about/visson"}>visson</Link>
    </div>
  );
}
