import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Contenu = ({ children }: Props) => {
  return (
    <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Contenu;