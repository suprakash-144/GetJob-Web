import { Inter, Averia_Libre } from "next/font/google";
import "./globals.css";
import { FirebaseProvider } from "./../config/firebase";
const inter = Inter({ subsets: ["latin"] });
// const arial = Averia_Libre({ weight: "400", subsets: "latin" });
export const metadata = {
  title: "GetJobs",
  description: "A website to apply to Jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirebaseProvider>{children}</FirebaseProvider>
      </body>
    </html>
  );
}
