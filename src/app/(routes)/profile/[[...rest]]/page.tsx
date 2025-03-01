import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <section>
      <div className="dark:hidden flex">
        <UserProfile />
      </div>
      <div className="hidden dark:flex">
        <UserProfile
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </section>
  );
};

export default ProfilePage;
