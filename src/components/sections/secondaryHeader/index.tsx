import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import classNames from 'classnames';

export default function SecondaryHeader(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', styles = {} } = props;
    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-secondary-header',
                colors,
                'relative',
                'shadow-header',
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
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
    const { variant = 'logo-left-primary-nav-left', ...rest } = props;
    switch (variant) {
        case 'logo-left-primary-nav-centered':
            return <SecondaryHeaderLogoLeftPrimaryCentered {...rest} />;
        case 'logo-left-primary-nav-right':
            return <SecondaryHeaderLogoLeftPrimaryRight {...rest} />;
        case 'logo-centered-primary-nav-left':
            return <SecondaryHeaderLogoCenteredPrimaryLeft {...rest} />;
        case 'logo-centered-primary-nav-centered':
            return <SecondaryHeaderLogoCenteredPrimaryCentered {...rest} />;
        default:
            return <SecondaryHeaderLogoLeftPrimaryLeft {...rest} />;
    }
}

// Erstelle hier die verschiedenen Varianten der Darstellung des Secondary Headers
function SecondaryHeaderLogoLeftPrimaryLeft(props) {
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
        </div>
    );
}


