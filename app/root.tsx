import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./styles/global.scss";
import GlobalNav from "./components/GlobalNav/GlobalNav";

export const links: LinksFunction = () => [];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  });
};

export default function App() {
  const { PAYPAL_CLIENT_ID } = useLoaderData<typeof loader>();
  
  const paypalOptions = {
    "client-id": PAYPAL_CLIENT_ID || "",
    currency: "USD",
    intent: "capture",
    components: "buttons,marks,messages",
    "enable-funding": "venmo,paylater,card",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalNav />
        <main>
          <PayPalScriptProvider options={paypalOptions}>
            <Outlet />
          </PayPalScriptProvider>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}