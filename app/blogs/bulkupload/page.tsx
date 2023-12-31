import FileReader from "@/components/BulkReader";
import getCurrentUser from "@/lib/session";
import { redirect } from "next/navigation";

export default async function BulkUpload() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div className="container min-h-screen my-8 space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl scroll-m-20">
        Bulk Upload Posts
      </h1>
      <FileReader />
    </div>
  );
}
