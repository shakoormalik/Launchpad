import launchpadLogo from "@/assets/launchpad-logo.png";
import { UserMenu } from "./UserMenu";

export const ChatHeader = () => {
  return (
    <header className="bg-white p-4 shadow-soft flex items-center justify-between">
      <img
        src={launchpadLogo}
        alt="LaunchPad Financial Literacy Series"
        className="h-12 w-auto"
      />
      <UserMenu />
    </header>
  );
};
