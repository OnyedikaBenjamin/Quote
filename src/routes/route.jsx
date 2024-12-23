

import Layout from "../layout/layout";
import QuoteDetails from "../components/quote/QuoteDetails";

export const route = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "quote-details",
        element: <QuoteDetails />
      }
    ]
  }
];
