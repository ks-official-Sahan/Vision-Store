import { Metadata } from "next";

// export const siteMetadata: Metadata = {
//   title: "Vision Store",
//   description: "Ecommerce Web Store developed by sahansachintha.com",
// };

export const Site = {
  siteName: "Vision Store",
  fooTxt: "Vision Store.",
  gitHubUser: "@ks-official-sahan",
  tagline: "✨ Never Give Up Until I Make a Difference!",
  gitHubUrl: "https://github.com/ks-official-sahan",
  author: "Sahan",
  authorFullName: "Sahan Sachintha",
  authorPortfolio: "#",
  org: "Evision IT",
  orgUrl: "https://evisionit.lk",
  myRole: "Full-Stack Software Engineer & Entrepreneur",
  companyRole: "Founder & CEO of Evision IT",
};

export const siteMetadata: Metadata | any = {
  title: "Vision Store",
  description: "Ecommerce Web Store developed by sahansachintha.com",
  authors: [
    {
      url: "https://sahansachintha.com",
      name: "Sahan Sachintha",
    },
  ],
  icons: "/favicon.ico",
  alternates: { canonical: "https://SahanSachintha.com" },
  siteUrl: "https://SahanSachintha.com",
  githubUsername: "ks-official-sahan",

  twitterUsername: "@SahanSubasingha",
  ogSiteName: "Vision Store",
  ogTitle: "Vision Store",
  ogDescription: "Ecommerce Web Store developed by sahansachintha.com",
  ogImage: "/favicon.ico",
  icon: "@/app/favicon.ico",
  legalName: "Vision Store",
};

export const PageMetadata = {
  about: {
    title: "About | Sahan",
    description: "Learn more about my journey and professional background.",
  },
  works: {
    title: "Works | Sahan",
    description: "Explore my projects and professional achievements.",
  },
  blog: {
    title: "Blog | Sahan",
    description: "Read my insights and stories that may inspire you.",
  },
  updates: {
    title: "Updates | Sahan",
    description: "Read my daily updates and m",
  },
  contact: {
    title: "Contact | Sahan",
    description: "Let's connect and discuss your next big idea!",
  },
};
