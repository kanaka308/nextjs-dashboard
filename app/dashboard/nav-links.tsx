import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
  import Link from 'next/link';
   
  // ...
   
  export default function NavLinks() {
    const links = [{
        icon: HomeIcon,
        name:"dashboard",
        href:"/"
    },{
        icon: DocumentDuplicateIcon,
        name:"invoices",
        href:"/dashboard/invoices"
    },{
        icon: UserGroupIcon,
        name:"customers",
        href:"/dashboard/customers"
    }]
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <LinkIcon  />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }