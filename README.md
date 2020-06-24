![Webpack Logo](./webpack-logo.gif  )
# Eva's Webpack Config

This [Webpack](https://webpack.js.org/) config is an ongoing work in progress. [Feedback is always welcome](mailto:evalarumbe@gmail.com).

I built this after following some of the official guides:

- [Getting Started](https://webpack.js.org/guides/getting-started/)
- [Asset Management](https://webpack.js.org/guides/asset-management/)
- [Output Management](https://webpack.js.org/guides/output-management/)
- [Development](https://webpack.js.org/guides/development/)
- [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
- [Production](https://webpack.js.org/guides/production/)
- [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

## File structure

| Path                      | But why |
| :------------------------ | :------- |
| `.gitignore`              | List files or dirs that should not be commited to the repo. |
| `package.json`            | Info about this project. List dependencies and scripts used to run Webpack. |
| `package-lock.json`       | Describe exactly which versions of dependencies are installed. |
| `babel.config.json`       | Configure options specific to Babel, which is loaded via Webpack. See below for details. |
| `webpack.dev.js`          | Configs that are only relevant in development (prioritize developer experience) |
| `webpack.prod.js`         | Configs that are only relevant in production (prioritize user experience) |
| `webpack.common.js`       | Configs that are common to both development and production environments |
| `dist/`                   | Files to distribute to the browser. Webpack's output. Can also contain hand-coded files, like it used to in this repo before commit [92b4ff1](https://github.com/evalarumbe/my-first-webpack-config/commit/92b4ff12bfe86bf20d330f03fa7f1fe27057d621#diff-b9cfc7f2cdf78a7f4b91a753d10865a2) |
| `src/`                    | Source code. Webpack's input. |
| `src/scss/`               | Sass source files |
| `src/templates/`          | Handlebars templates and helper functions |

## Packages used

### Browser support

| Package                   | But why |
| :------------------------ | :------ |
| `browserslist`            | I let `package.json` specify which browsers to support. Used by many tools, such as Babel and Autoprefixer. |

### JavaScript

[Babel](https://babeljs.io/) lets us write modern JS while exporting cross-compatible code for older browsers that can't handle the heat.

| Package                   | But why |
| :------------------------ | :------ |
| `babel-loader`            | Enable Webpack to run `@babel/core`. |
| `@babel/core`             | This is Babel! But I'm useless without plugins or presets (which are collections of plugins). |
| `@babel/preset-env`       | Preset based on [caniuse](https://caniuse.com/). I decide which syntax to change depending on the project's supported browsers. |
| `core-js`                 | Provide polyfills for new js features that add functionality (more than just new syntax). |

### CSS

These work as a pipeline: [Sass](https://sass-lang.com/) => CSS => add prefixes => minify => inject into style tags.
In the Webpack config, you'll notice the pipeline runs from bottom to top, but here I'll list them in reading order. The freaky config syntax for postcss plugins came from [the postcss-loader docs](https://webpack.js.org/loaders/postcss-loader/#plugins)

| Package                   | But why |
| :------------------------ | :------ |
| `sass-loader`             | Enable Webpack to run `sass`. |
| `sass`                    | Compile SCSS syntax into CSS. |
| `fibers`                  | Make SCSS compilation faster as recommended in [the docs](https://webpack.js.org/loaders/sass-loader/). |
| `postcss-loader`          | Enable CSS to run through plugins before it hits `dist/`. |
| `postcss-preset-env`      | Plugin used by postcss. Includes [Autoprefixer](http://autoprefixer.github.io/). |
| `cssnano`                 | Plugin used by postcss. Minifies CSS. |
| `css-loader`              | Enable CSS to be piped to `style-loader`. |
| `mini-css-extract-plugin` | Generate static CSS files so users without JS still have a stylish time. |

### HTML

HTML is auto-generated based on Handlebars templates

| Package                   | But why |
| :------------------------ | :------ |
| `handlebars`              | Compile Handlebars templates. |
| `handlebars-loader`       | Load Handlebars templates through Webpack. |
| `html-webpack-plugin`     | Generate HTML, optionally based on a Handlebars template. |

### Webpack

Webpack lets us bundle source files into distributed files according to rules set in the Webpack config files.

| Package                   | But why |
| :------------------------ | :------ |
| `webpack`                 | I am Webpack. Hear me roar. |
| `webpack-cli`             | I am a required helper for Webpack. |
| `webpack-merge`           | Enable split config files for dev and prod purposes (and common configs to both). |
| `webpack-dev-server`      | Look ma, no hands! Enable a no-refresh dev experience, including [hot module replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/). |
| `clean-webpack-plugin`    | Clean out old unused files from `dist/` on every build. Handy to keep `dist/` free of unused temp files generated by HMR when webpack-dev-server is set to write to `dist/`. |

## Learnings

Notes-to-self on things things discovered through experimentation and research. Would love to hear about it if you have other ideas! Researched in June 2020. Things change though.

### Things I learned about Webpack

If `src/index.js` has a dependency, it's enough to:

- include the dependency file in `src/`
- import it at the top of `src/index.js` (Webpack will then smoosh the dependency logic into your main bundle)

Therefore it's not necessary to:

- add the dependency to `webpack.config.js`
- add the dependency to `dist/index.html`

### Things I learned about Babel

See `babel.config.json`. Since comments aren't supported in JSON, I'll explain here.

Babel has an optional `debug` flag that shows detailed output in the CLI when building. Handy for when Babel isn't playing ball.

- `@babel/core` does nothing alone. It needs plugins and presets.
- `@babel/preset-env` is one such preset. It does nothing alone. It needs `useBuiltIns` to be set (by default it's set to `false`. It can be set to either `usage` or `entry`).
- Setting `useBuiltIns` to `entry` is working beautifully, and outputs a smaller bundle than `usage`. I haven't pinpointed what the difference is, but `entry` is recommended in the [preset-env docs](https://babeljs.io/docs/en/babel-preset-env) so that'll do.
