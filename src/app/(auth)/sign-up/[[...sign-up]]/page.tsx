import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <>
      <div className="dark:hidden">
        <SignUp />
      </div>
      <div className="dark:block hidden">
        <SignUp
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </>
  );
}
