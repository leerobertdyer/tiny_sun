import Header from "@/components/Header/Header";

type PropsDefinition = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: PropsDefinition) {
  return (
    <div
      className="
    w-screen
    h-[100%]
  bg-tinyBlack-base 
  text-white 
  "
    >
      <Header />
      {children}
    </div>
  );
}
