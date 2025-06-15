import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Magali Carrion",
  description: "Thank you for contacting Magali Carrion, VFX Compositor.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
