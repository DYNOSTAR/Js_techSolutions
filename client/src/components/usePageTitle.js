import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | JS Tech Solutions` : 'JS Tech Solutions | Websites, Systems, IT Consultancy & Repairs in Karatina';
  }, [title]);
}
