export const metadata = {
  title: "Next app",
  description: "jpt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>Hello Toastify Page{children}</body>
    </html>
  );
}
