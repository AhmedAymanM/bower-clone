## Coding challenge

Please write a responsive website, which mimics the behaviour of https://bower.io/search/. The application should be programmed using TypeScript and React. This task is left open-ended intentionally.

Note: bower.io/search is not returning the package list currently.

**Layout**

The site should have a header section, a left sidebar, a footer and a content area. The content area should show a list of modules with their **name, owner & stars.**

You can implement your own design or copy the style from the original Bower page. You can also use the UI library of your choice or implement your own React components. As you prefer. Placeholders can be used for the content.

**Pagination & Sorting**

The list of modules should be at least [sortable by stars](https://libraries.io/api#project-search). It is important that the list is paged, which means that only **5 items** per page will be shown. It should also be possible to search for a specific module.

**API**

You can use the Libraries.io API to query for modules (Example: https://libraries.io/api/search?q=grunt&api_key=YOUR_API_KEY). It will return you all the data which you need to display.

**Assessment**

When writing your code, please make sure that your project is structured and can be executed with `yarn install` & `yarn start`. 

When running `yarn start`, a browser should show up and display your developed site. If we run `yarn test`, we want to see unit tests running for the business logic of your code. Your project must be cross-platform compatible (running on Linux, Windows & macOS).

Good luck!