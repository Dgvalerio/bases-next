/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import dynamic from 'next/dynamic';

declare global {
  interface Console {
    tron: any;
  }
}

export const ReactOTronNoSSR = dynamic(
  () =>
    import('reactotron-react-js').then((tron) => {
      if (process.env.NODE_ENV === 'development') {
        const t = tron.default.configure().connect();
        t.clear();
        console.tron = t;
      }
    }) as any,
  { ssr: false }
);
