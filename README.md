# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn't feel obligated to use this
feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Status

- home page is done
- have separate pages for registration and login
- have local user state and a simple store

  - need to learn about server state and perhaps do that instead for the user
    state
  - https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/
  - https://swr.vercel.app/docs/getting-started

-next step is to write a small server in node/express

- grab boilerplate from CS 260

- it needs to handle the registration authorization from the authenticator
- it needs to generate session info for the QR code generator
- see the paper to be sure we have this done right. I think it is specified
  there!

- navigation menu? Use something from tailwind?
  https://tailwindui.com/components/application-ui/navigation/navbars
  https://daisyui.com/components/navbar/

- what is the structure of the app? Multiple pages? with guards?
  - pretty easy to do react router
  - guards not as well developed as Vue Router?
  - standard structure:
    - home page shows special content if logged in, standard content otherwise
    - e.g. encourage to register or sign in
    - register page -> when done should log you in
    - login page
    - menu bar that recognizes you by name and then has a logout option
  - need global data that goes across pages
  - can we do this without a back-end?
    - or should we have a back end with cookies
  - for Let's Auth we need a server to answer requests, so may as well set
    cookies?
  - need to close loop with client-out-of-loop login (e.g. long polling with a
    timeout)
  - where is our previous back end for a Let's Auth test website. We had one!
    Surely!
