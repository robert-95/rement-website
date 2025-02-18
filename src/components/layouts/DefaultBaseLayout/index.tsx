import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from '../../sections/Header';
import SecondaryHeader from '../../sections/secondaryHeader';  // Importiere den SecondaryHeader
import Footer from '../../sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../../../utils/seo-utils';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const pageMeta = page?.__metadata || {};
    let title = seoGenerateTitle(page, site);
    let metaTags = seoGenerateMetaTags(page, site);
    let metaDescription = seoGenerateMetaDescription(page, site);
    
    // Den SecondaryHeader aus der Page (oder Site) extrahieren
    const { secondaryHeader } = page || {};

    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    {metaDescription && <meta name="description" content={metaDescription} />}
                    {metaTags.map((metaTag) => {
                        if (metaTag.format === 'property') {
                            // OpenGraph meta tags (og:*) sollten das Format <meta property="og:…" content="…"> haben
                            return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                        }
                        return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                    })}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="google-site-verification" content="QxO03R5kblCWRLwf0Nz23ZLZtymP2z3y8aVPa9HE_fE" />
                    {site.favicon && <link rel="icon" href={site.favicon} />}
                </Head>

                {/* Hier Header oder SecondaryHeader abhängig vom Vorhandensein rendern */}
                {secondaryHeader ? (
                    <SecondaryHeader {...secondaryHeader} data-sb-object-id={secondaryHeader?.__metadata?.id} />
                ) : (
                    site.header && <Header {...site.header} data-sb-object-id={site.header?.__metadata?.id} />
                )}

                {props.children}

                {site.footer && <Footer {...site.footer} data-sb-object-id={site.footer?.__metadata?.id} />}
            </div>
        </div>
    );
}
