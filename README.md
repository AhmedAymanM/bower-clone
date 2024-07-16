# Getting Started

A demo react app that mimics behaviour of
[bower.io/search](https://bower.io/search/).

To run project please please add `.env.development` file with your [libraries.io](https://libraries.io/api) API
key. `.env.development.example` file is provided as an example.

You can get your API key from [libraries.io](https://libraries.io/api).

# Tools Used

This project has been conveniently bootstrapped with [Vite](https://vitejs.dev/)
and uses [yarn v2+](https://yarnpkg.com/getting-started) as package manager.

For type checking, the project is written in
[typescript](https://www.typescriptlang.org/). And [Zod](https://github.com/colinhacks/zod) is used for schema
validation, when possible.

For styling, [tailwindCSS](https://tailwindcss.com/) is used.

For testing, [vitest](https://vitest.dev/) is used as test runner in combination
with react [testing-library](https://testing-library.com/), tests are collected
with relevant files inside `/__tests__` folder.

To ensure code quality and adherence to best practices, both
[eslint](https://eslint.org/) and [prettier](https://prettier.io/) with plugins
to check issues for, tailwind, accessibility, react, typescript and more.

# File Structure

The project file structure tries to mimics a medium to large SPA React app
and tries to follow best practices unless otherwise stated in the code. Please
note this structure might not be ideal or encouraged with a project of such size
and scope its just a POC.

The project structure is as follows:

```
├── main.tsx // entry point for the app
├── App.tsx // main app component in larger projects this is probably folder of all routes
├── components // feature & ui components
│   ├── features // feature specific components
│   ├── layouts // common shared layouts
│   ├── ui // common shared ui components
├── hooks // custom hooks used across the app
├── utils // utility & helper functions
├── types // common types used across the app
├── assets // static assets
```

tests of different components are collected inside `/__tests__` folder of each
relevant directory (like components, hooks, utils, etc.)

# Suggested Improvements

- suggested improvements are left across the code as `README:` comments

# Known Issues

- debounced search might not work as expected, and might return no the expected results

## Useful Scripts

In the project directory, you can run:

### `yarn install` or `yarn`

Installs packages and dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## `yarn test`

will run tests in watch mode

### `yarn lint`

Will run `tsc` and `eslint`.
