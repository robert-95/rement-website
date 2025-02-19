import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../../../utils/seo-utils';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const pageMeta = page?.__metadata || {};
    let title = seoGenerateTitle(page, site);
    let metaTags = seoGenerateMetaTags(page, site);
    let metaDescription = seoGenerateMetaDescription(page, site);
    const isEnglish = page?.english === true;
    const headerData = isEnglish ? site['header-english'] : site.header;
    const lang = isEnglish ? "en" : "de";

    return (
        <html lang={lang}>
            <head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="QxO03R5kblCWRLwf0Nz23ZLZtymP2z3y8aVPa9HE_fE" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
            </head>
            <body className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
                <div className="sb-base sb-default-base-layout">
                    {headerData && <Header {...headerData} data-sb-object-id={headerData?.__metadata?.id} />}
                    {props.children}
                    {site.footer && <Footer {...site.footer} data-sb-object-id={site.footer?.__metadata?.id} />}
                </div>
            </body>
        </html>
    );
}
