import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import { FormProvider } from "./context/form-context";
import { AuthProvider } from "./context/auth-context";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const roboto = Roboto({
  weight: "600",
  // style: 'italic',
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const bgcolor = "black";
  const navbarOptions = [
    { name: "About", linkHref: "about" },
    { name: "Pricing", linkHref: "pricing" },
  ];
  const loginOptions = [
    // { name: "Dashboard", linkHref: "dashboard" },
    { name: "My works", linkHref: "my-works" },
    { name: "New ", linkHref: "new-presentation" },
  ];
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-[radial-gradient(circle,_rgba(134,239,172,0.5)_0%,_rgba(134,239,172,0)_70%)] bg-black`}
      >
        <AuthProvider>
          <FormProvider>
            <Toaster position="bottom-right" reverseOrder={false} />
            <Navbar
              brandName="Company"
              menuOptions={navbarOptions}
              loginOptions={loginOptions}
              
            />
            <div className="pt-20"> {children}</div>
          </FormProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
