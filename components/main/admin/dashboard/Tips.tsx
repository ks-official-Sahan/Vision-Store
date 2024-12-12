import Link from "next/link";
import React from "react";

const Tips = () => {
  return (
    <section>
      <div>Here's what to do next:</div>

      <ul className="mt-2 px-2 text-gray-600 text-sm">
        <li>
          <Link
            href="/api/seed"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-500"
          >
            Seed your database
          </Link>{" "}
          with a few products and pages to jump-start your new project, then{" "}
          <a href="/">visit your website</a> to see the results.
        </li>
        <li>
          Head over to{" "}
          <Link
            href="https://dashboard.stripe.com/test/apikeys"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-500"
          >
            Stripe to obtain your API Keys
          </Link>
          . Create a new account if needed, then copy them into your environment
          variables and restart your server.
        </li>
        <li>
          <Link
            className="underline text-gray-500"
            href="/admin/collections/products"
          >
            Link each of your products
          </Link>{" "}
          to Stripe by selecting the corresponding product using the dropdown
          under <i>Product Details</i>.
        </li>
      </ul>
    </section>
  );
};

export default Tips;
