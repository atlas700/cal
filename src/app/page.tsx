import { redirect } from "next/navigation";

export default function RedirectPage() {
  // TODO: Replace this with actual session retrieval logic
  const session = {
    userId: "123",
  };

  if (session.userId == null) {
    redirect("/auth/login");
  } else {
    redirect("/event-types");
  }
}
