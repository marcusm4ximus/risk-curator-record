import type { ReactNode } from "react";
import { Shell } from "@/components/shell";
import { loadRegistry } from "@/lib/registry";
import "./globals.css";

const themeBoot = `try{if(localStorage.getItem("cws-theme")==="night"){document.documentElement.classList.add("night")}}catch(e){}`;

export const metadata = {
  title: "Risk Curator Record",
  description: "A registry of curator incidents.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const data = loadRegistry();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <Shell data={data}>{children}</Shell>
      </body>
    </html>
  );
}
