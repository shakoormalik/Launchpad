import launchpadLogo from "@/assets/launchpad-logo.png";

export const ChatHeader = () => {
  return (
    <header className="bg-white p-4 shadow-soft">
      <img 
        src={launchpadLogo} 
        alt="LaunchPad Financial Literacy Series" 
        className="h-12 w-auto"
      />
    </header>
  );
};
