import '~/styles/reset.scss';
import '~/styles/colors.scss';
import '~/styles/typography.scss';
import '~/styles/global.scss';
import '~/styles/utils.scss';

import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
    useLoaderData,
} from '@remix-run/react';
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { ErrorComponent } from '~/components/error-component/error-component';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const paypalClientID = process.env.PAYPAL_CLIENT_ID;

  if (!paypalClientID) {
      console.error("FATAL: PAYPAL_CLIENT_ID environment variable is not set on the server!");
      return json({ ENV: { PAYPAL_CLIENT_ID: null } });
  }

  return json({ ENV: { PAYPAL_CLIENT_ID: paypalClientID } });
};


export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    const data = useLoaderData<{ ENV: { PAYPAL_CLIENT_ID: string | null } }>();
    const paypalClientID = data?.ENV?.PAYPAL_CLIENT_ID;

    const initialOptions = paypalClientID ? {
        "client-id": paypalClientID,
        currency: "USD",
        intent: "capture",
    } : null;


    return (
        <div id="root">
            {initialOptions ? (
                <PayPalScriptProvider options={initialOptions}>
                    <Outlet />
                </PayPalScriptProvider>
            ) : (
                <div>
                    <p style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
                        Error: PayPal Payment System is not configured correctly. Missing Client ID.
                    </p>
                    <Outlet />
                </div>
            )}
        </div>
    );
}


export function ErrorBoundary() {
    const error = useRouteError();
    const { title, message } = getErrorDetails(error);
    console.error("Root Error Boundary Caught:", error);
    return <ErrorComponent title={title} message={message} />;
}

function getErrorDetails(error: unknown) {
    let title: string;
    let message: string | undefined;

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = 'Page Not Found';
            message = "Looks like the page you're trying to visit doesn't exist";
        } else {
            title = `${error.status} - ${error.statusText}`;
            message = error.data?.message ?? '';
        }
    } else {
        title = 'Unknown error ocurred';
        if (error instanceof Error) {
            message = error.message;
        }
    }
    return { title, message };
}