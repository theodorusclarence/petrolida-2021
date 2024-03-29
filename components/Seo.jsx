import Head from 'next/head';

export default function Seo({ children, seoData }) {
    // TODO change this!
    const publicURL = 'https://petrolida-2021.vercel.app';
    return (
        <Head>
            {children}
            <meta property='og:title' content={seoData?.pageTitle || 'Petrolida 2021'} />
            <meta property='og:type' content='event' />
            <meta property='og:url' content='https://petrolida.its.ac.id' />
            <meta property='og:description' content='Petroleum Integrated Days by SPE ITS SC' />
            <meta
                property='og:image'
                content={`${publicURL}/img/${seoData?.img || 'ograph'}.jpg`}
            />
            <meta name='description' content='Petroleum Integrated Days by SPE ITS SC' />
            <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
            <link rel='manifest' href='/favicon/site.webmanifest' />
            <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
            <link rel='shortcut icon' href='/favicon/favicon.ico' />
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
            <meta name='theme-color' content='#ffffff'></meta>
            <script async src='https://www.googletagmanager.com/gtag/js?id=G-XW8MVPBCD3'></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XW8MVPBCD3');
    `,
                }}
            ></script>
        </Head>
    );
}
