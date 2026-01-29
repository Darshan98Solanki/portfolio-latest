import "./globals.css";
import ScrollIndicator from "./components/scrollIndicator";
import {inter} from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
