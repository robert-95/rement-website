import { defineStackbitConfig } from '@stackbit/types';
import { allModels } from 'sources/local/models';

export const config = defineStackbitConfig({
    stackbitVersion: '~0.5.0',
    ssgName: 'nextjs',
    cmsName: 'git',
    nodeVersion: '16',
    models: allModels,
    pagesDir: 'content/pages',
    dataDir: 'content/data',
    presetSource: {
        type: 'files',
        presetDirs: ['sources/local/presets']
    },
    assets: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    },
    pageLayoutKey: 'type',
    styleObjectModelName: 'ThemeStyle'
});

export default config;
