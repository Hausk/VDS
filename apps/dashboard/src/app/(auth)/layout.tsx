import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'L&V Dashboard - Connexion',
  description: "Connexion à l'espace administratif de Libre & Vivant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-screen h-screen overflow-hidden">{children}</div>;
}
