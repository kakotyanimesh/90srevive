import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <head>
        <title>my website</title>
        <meta name="description" content="my website's description" />
      </head>
      <body>
        {children}
      </body>
    </div>
  );
}
