import { useEffect } from 'react';

export function Analytics() {
  const ga = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const plausible = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

  useEffect(() => {
    if (ga) {
      const src = document.createElement('script');
      src.async = true;
      src.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`;
      document.head.appendChild(src);

      const inline = document.createElement('script');
      inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`;
      document.head.appendChild(inline);
    }

    if (plausible) {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = plausible;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  }, [ga, plausible]);

  return null;
}
