# Getting Started

A demo react app that mimics behaviour of [bower.io/search](https://bower.io/search/).

# Tools Used

This project has been conveniently bootstrapped with [Vite](https://vitejs.dev/)
and uses [yarn v2+](https://yarnpkg.com/getting-started) as package manager.

For type checking, the project is written in
[typescript](https://www.typescriptlang.org/). And [Zod](https://github.com/colinhacks/zod) is used for schema
validation, when possible.

For styling, [tailwindCSS](https://tailwindcss.com/) is used.

For testing, [vitest](https://vitest.dev/) is used as test runner in combination with react [testing-library](https://testing-library.com/).

To ensure code quality and adherence to best practices, both
[eslint](https://eslint.org/) and [prettier](https://prettier.io/) with plugins
to check issues for, tailwind, accessibility, react, typescript and more.

# File Structure

The project file structure tries to mimics a medium to large SPA React app
and tries to follow best practices unless otherwise stated in the code.

Although, please note this structure might not be ideal or encouraged with a project of such size and scope.

# Suggested Improvements

-

# Known Issues

-

## Useful Scripts

In the project directory, you can run:

### `yarn install` or `yarn`

Installs packages and dependencies

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## `yarn test`

will run tests in watch mode

### `yarn lint`

Will run `tsc` and `eslint`.
