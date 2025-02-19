import SideBar from "@/components/SideBar"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstname:"Daniel", lastname: "Webdev" };

  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar/>
    {children}
   </main>
  );
}
