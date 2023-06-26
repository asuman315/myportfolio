import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>  
                <Main />
                <NextScript />
                <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
                <script src="https://mediafiles.botpress.cloud/e59ea1fb-957a-4eb3-85c2-f452a4f33010/webchat/config.js" defer></script>
            </body>
        </Html>
    )
}