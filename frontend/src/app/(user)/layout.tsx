import Header from "@/components/client/user/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}
