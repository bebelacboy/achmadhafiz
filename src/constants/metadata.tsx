import { DOMAIN } from "./constant";
import { Metadata } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: {
    template: "%s | Achmad Hafiz",
    default: "Achmad Hafiz's Portfolio",
  },
  description: "Achmad Hafiz portfolio website as a Software Engineer. He's passionate in exploring web technologies whether it is front end development or back end development.",
  openGraph: {
    title: {
      template: "%s | Achmad Hafiz",
      default: "Achmad Hafiz's Portfolio",
    },
    url: "",
    siteName: "Achmad Hafiz",
    images: {
        url: `https://${DOMAIN}/favicon/android-chrome-512x512.png`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    
    type: 'website',
    description: "Achmad Hafiz portfolio website as a Software Engineer. He's passionate in exploring web technologies whether it is front end development or back end development.",
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: "%s | Achmad Hafiz",
      default: "Achmad Hafiz's Portfolio",
    },
    description: "Achmad Hafiz portfolio website as a Software Engineer. He's passionate in exploring web technologies whether it is front end development or back end development.",
    creator: '@superbebelac',
    images: `https://${DOMAIN}/favicon/android-chrome-512x512.png`, // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};


export const projectsMetadata: Metadata = {
  title: "Projects",
  description: "Showcase of Achmad Hafiz's Project throughout his software engineering journey.",
  openGraph: {
    title: "Projects",
    url: `https://${DOMAIN}/projects`,
    siteName: "Achmad Hafiz",
    images: {
        url: `https://${DOMAIN}/images/projects/pokedex-thumbnail.png`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    type: 'website',
    description: "Showcase of Achmad Hafiz's Project throughout his software engineering journey."
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Projects",
    description: "Showcase of Achmad Hafiz's Project throughout his software engineering journey.",
    creator: '@superbebelac',
    images: `https://${DOMAIN}/favicon/android-chrome-512x512.png`,
  }
};

export const aboutMetadata: Metadata = {
  title: "About",
  description: "Background of Achmad Hafiz as a Software Engineer and some of his personal information",
  openGraph: {
    title: "About",
    url: `https://${DOMAIN}/about`,
    siteName: "Achmad Hafiz",
    images: {
        url: `https://${DOMAIN}/images/about/me.jpg`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    type: 'website',
    description: "Background of Achmad Hafiz as a Software Engineer and some of his personal information"
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "About",
    description: "Background of Achmad Hafiz as a Software Engineer and some of his personal information",
    creator: '@superbebelac',
    images: `https://${DOMAIN}/favicon/android-chrome-512x512.png`,
  }
};
export const projectDetailMetadata: Metadata = {
  title: "About",
  description: "Background of Achmad Hafiz as a Software Engineer and some of his personal information",
  openGraph: {
    title: "About",
    url: `https://${DOMAIN}/about`,
    siteName: "Achmad Hafiz",
    images: {
        url: `https://${DOMAIN}/images/about/me.jpg`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    type: 'website',
    description: "Background of Achmad Hafiz as a Software Engineer and some of his personal information"
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "About",
    description: "Background of Achmad Hafiz as a Software Engineer and some of his personal information",
    creator: '@superbebelac',
    images: `https://${DOMAIN}/favicon/android-chrome-512x512.png`,
  }
};