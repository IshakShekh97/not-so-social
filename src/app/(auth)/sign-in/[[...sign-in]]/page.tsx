import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <>
      <div className="dark:hidden">
        <SignIn />
      </div>
      <div className="dark:block hidden">
        <SignIn
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </>
  );
}
