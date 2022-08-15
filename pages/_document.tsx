import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

interface Props {
    lang: string;
}

class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & {lang: string|undefined}> {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps, lang: ctx.query.lng as (string|undefined) || 'en' };
    }

    render() {
        return (
            <Html lang={this.props.lang}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    } 
}

export default MyDocument;