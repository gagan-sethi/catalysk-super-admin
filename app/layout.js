import { Toaster } from "react-hot-toast";
import 'rsuite/dist/rsuite.min.css';
import "styles/theme.scss";

export const metadata = {
  title: "Catalysk",
  description: "Catalysk admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous" defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous" defer
        ></script>

        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js">
          {" "}
        </script> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer></script>
      </head>
        {/* <Head>
        </Head> */}
      <Toaster position="right-top" />

      <body className="bg-light">{children}</body>
    </html>
  );
}
