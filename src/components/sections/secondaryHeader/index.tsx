import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';
import ChevronDownIcon from '../../svgs/chevron-down';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function SecondaryHeader(props) {
    const { colors = 'bg-light-fg-dark', styles = {} } = props;
    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-header',
                colors,
                'relative',
                'shadow-header',
                styles?.self?.margin ? mapStyles({ padding: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : 'p-4',
                'z-50'
            )}
            data-sb-object-id={props['data-sb-object-id']}
        >
            <div className="max-w-7xl mx-auto">
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <SecondaryHeaderVariants {...props} />
            </div>
        </header>
    );
}

function SecondaryHeaderVariants(props) {
    const { variant = 'logo-left-secondary-nav-left', ...rest } = props;
    switch (variant) {
        case 'logo-left-secondary-nav-centered':
            return <SecondaryHeaderLogoLeftSecondaryCentered {...rest} />;
        case 'logo-left-secondary-nav-right':
            return <SecondaryHeaderLogoLeftSecondaryRight {...rest} />;
        case 'logo-centered-secondary-nav-left':
            return <SecondaryHeaderLogoCenteredSecondaryLeft {...rest} />;
        case 'logo-centered-secondary-nav-centered':
            return <SecondaryHeaderLogoCenteredSecondaryCentered {...rest} />;
        default:
            return <SecondaryHeaderLogoLeftSecondaryLeft {...rest} />;
    }
}

function SecondaryHeaderLogoLeftSecondaryLeft(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark' } = props;
    return (
        <div className="flex items-center relative">
            {(title || logo?.url) && (
                <div className="mr-10">
                    <SiteLogoLink title={title} logo={logo} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden mr-10 gap-x-10 lg:flex lg:items-center"
                    data-sb-field-path=".primaryLinks"
                >
                    <ListOfLinks links={primaryLinks} colors={colors} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className="hidden ml-auto gap-x-2.5 lg:flex lg:items-center"
                    data-sb-field-path=".secondaryLinks"
                >
                    <ListOfLinks links={secondaryLinks} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function SecondaryHeaderLogoLeftSecondaryCentered(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark' } = props;
    return (
        <div className="flex items-center relative">
            {(title || logo?.url) && (
                <div className="mr-10">
                    <SiteLogoLink title={title} logo={logo} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center gap-x-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-auto"
                    data-sb-field-path=".primaryLinks"
                >
                    <ListOfLinks links={primaryLinks} colors={colors} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center ml-auto gap-x-2.5"
                    data-sb-field-path=".secondaryLinks"
                >
                    <ListOfLinks links={secondaryLinks} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function SecondaryHeaderLogoLeftSecondaryRight(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark' } = props;
    return (
        <div className="flex items-center relative">
            {(title || logo?.url) && (
                <div className="mr-10">
                    <SiteLogoLink title={title} logo={logo} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center ml-auto gap-x-10"
                    data-sb-field-path=".primaryLinks"
                >
                    <ListOfLinks links={primaryLinks} colors={colors} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className={classNames(
                        'hidden',
                        'lg:flex',
                        'lg:items-center',
                        'gap-x-2.5',
                        primaryLinks.length > 0 ? 'ml-10' : 'ml-auto'
                    )}
                    data-sb-field-path=".secondaryLinks"
                >
                    <ListOfLinks links={secondaryLinks} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function SecondaryHeaderLogoCenteredSecondaryLeft(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark' } = props;
    return (
        <div className="flex items-center relative">
            {(title || logo?.url) && (
                <div className="mr-10 lg:mr-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2">
                    <SiteLogoLink title={title} logo={logo} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center gap-x-10" data-sb-field-path=".primaryLinks">
                    <ListOfLinks links={primaryLinks} colors={colors} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center ml-auto gap-x-2.5"
                    data-sb-field-path=".secondaryLinks"
                >
                    <ListOfLinks links={secondaryLinks} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function SecondaryHeaderLogoCenteredSecondaryCentered(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark' } = props;
    return (
        <>
            <div className="flex items-center relative">
                {(title || logo?.url) && (
                    <div className="mr-10 lg:mr-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2">
                        <SiteLogoLink title={title} logo={logo} />
                    </div>
                )}
                {secondaryLinks.length > 0 && (
                    <ul
                        className="hidden lg:flex lg:items-center gap-x-2.5 ml-auto"
                        data-sb-field-path=".secondaryLinks"
                    >
                        <ListOfLinks links={secondaryLinks} />
                    </ul>
                )}
                {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
            </div>
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center lg:justify-center gap-x-10 mt-4"
                    data-sb-field-path=".primaryLinks"
                >
                    <ListOfLinks links={primaryLinks} colors={colors} />
                </ul>
            )}
        </>
    );
}

// Rest of the code remains the same (MobileMenu, SiteLogoLink, ListOfLinks, etc.)
