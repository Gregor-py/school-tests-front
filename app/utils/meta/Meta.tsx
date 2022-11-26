import { FC } from 'react';
import { ISeo } from '@/utils/meta/meta.interface';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { onlyText } from '@/utils/string/clearText';
import { siteName } from '@/config/ceo.config';
import logoImage from '@/assets/logo.svg';

const Meta: FC<ISeo> = ({ title, description, children }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        {description ? (
          <>
            <title itemProp="headline">{title}</title>
            <meta
              itemProp="description"
              name="description"
              content={onlyText(description, 152)}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="ua" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={logoImage} />
            <meta property="og:site_name" content={siteName} />
            <meta
              property="og:description"
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
