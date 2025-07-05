import { UserButton } from "@civic/auth/react";

export function TitleBar() {
  return (
    <div className="flex items-center justify-center m-10">
      <UserButton />
    </div>
  );
};