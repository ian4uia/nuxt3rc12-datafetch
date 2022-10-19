# Nuxt 3 rc12 Data Fetch Issue

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

## Reproduce Bug

1. When you open the app on your localhost the page fetches a random dog image.
2. Click on the page 2 link to open the second page.
3. Now click on the 'Go Back' button to return to the main page.
4. See the bug.  The page should refresh the data and show a new image of a dog but it hangs showing the 'Loading...' text indefinitely.
