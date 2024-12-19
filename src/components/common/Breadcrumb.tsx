"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const indonesianBreadcrumb: any = {
  Books: { text: "Buku" },
  Confirm: { text: "Konfirmasi" },
  Order: { text: "Pesanan" },
  Payment: { text: "Pembayaran" },
};

const Breadcrumb = () => {
  const router = usePathname();

  const getBreadcrumbItems = (path: any) => {
    const pathArray = path.split("/").filter((p: any) => !!p); // Split path by '/' and remove empty strings.
    const breadcrumbItems = [
      { href: "/", label: "Home" },
      ...pathArray.map((p: any, i: number) => ({
        href: `/${pathArray.slice(0, i + 1).join("/")}`,
        label:
          indonesianBreadcrumb[p.charAt(0).toUpperCase() + p.slice(1)] ==
          undefined
            ? p.charAt(0).toUpperCase() + p.slice(1)
            : indonesianBreadcrumb[p.charAt(0).toUpperCase() + p.slice(1)].text,
      })),
    ];
    return breadcrumbItems;
  };

  const breadcrumbItems = getBreadcrumbItems(router);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className={`breadcrumb-item ${
                index === breadcrumbItems.length - 1 ? " active" : ""
              }`}
            >
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-semibold">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
            <p className="mx-3">
              {index === breadcrumbItems.length - 1 ? "" : "/"}
            </p>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
