export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Test Layout</h2>
      {children}
    </div>
  );
}
