import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <Layout pageTitle="Home">
      <div>
        <h1>Welcome on my first next web app!</h1>
      </div>
      <Image
        src="/images/logo_cinechill.jpg"
        height={300}
        width={544}
        alt="logo"
      />
    </Layout>
  );
}
