import { defineConfig } from 'vite'
import path from 'path'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({

    ////////////////////////////////////////
    // BASE CONFIG

    // GLOBAL

    // root: 'src',
    publicDir: 'src/img/static', // Directory to serve as plain static assets

    // PRODUCTION BUILD

    build: {
        outDir: 'dist',
        assetsDir: './', // the sub-directory to generate assets (relative to build.outDir)
        // sourcemap: true, // Sourcemaps in production
        // rollupOptions: {
        //     // https://rollupjs.org/guide/en/#big-list-of-options
        // }
    },

    // DEVELOPMENT SERVER

    server: {
        sourcemap: true,
        // open: '/index.html',
    },

    // CSS AND SCSS

    css: {
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: `$injectedColor: orange;`
        //     },
        // },
        devSourcemap: true,
    },

    ////////////////////////////////////////
    // PLUGINS

    plugins: [

        // SVG SPRITESHEET
        // See: https://github.com/vbenjs/vite-plugin-svg-icons

        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/img/sprites')],
            // Specify symbolId format
            // symbolId: 'icon-[dir]-[name]',
            symbolId: '[name]',

            /**
             * custom insert position
             * @default: body-last
             */
            inject: 'body-last' | 'body-first',

            // /**
            //  * custom dom id
            //  * @default: __svg__icons__dom__
            //  */
            // customDomId: '__svg__icons__dom__',
        }),

        // IMAGEMIN
        // See: https://github.com/vbenjs/vite-plugin-imagemin

        viteImagemin({
            // gifsicle: {
            //     optimizationLevel: 7,
            //     interlaced: false,
            // },
            // optipng: {
            //     optimizationLevel: 7,
            // },
            // mozjpeg: {
            //     quality: 20,
            // },
            // pngquant: {
            //     quality: [0.8, 0.9],
            //     speed: 4,
            // },
            // svgo: {
            //     plugins: [
            //         {
            //             name: 'removeViewBox',
            //         },
            //         {
            //             name: 'removeEmptyAttrs',
            //             active: false,
            //         },
            //     ],
            // },
        }),
    ],
})