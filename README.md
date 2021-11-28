# Checkout-App

Front end checkout component for payments with credit card or apple pay. Made with React.

## Background

Project created for the Nuwe and Jump2digital challenge.

## Usage

This [link](https://gabriel-miranda-checkout-app.netlify.app/) lets you view the component and assess how it works.

## Component

This component is implemented through the <PayView> component and displayed in the React <App/>.
The <PageView/> component rendering the components <CardForm/>, <PayButton/>, <Footer/> and <ProductView/>.

The component uses Fetch with a GET method to access product information in the API.
The API endpoint must return a JSON file with the product information below:

    {
    "img": "image path",
    "name": "name of the product",
    "price": "price of the product",
    }

The card info sent to the API endpoint a JSON file with the info below:

    {
    email: 'client email',
    name: 'client name',
    country: 'client country',
    cardNumber: 'card number',
    cardDate: 'valid date creditcard',
    cardCvc: 'credit card secure code',
    zipCode: 'client Zip Code',
    }

All the information that is sent and received are in string format.

## Installation

This component was made to work on a React project.

First - clone the repo:

`git clone https://github.com/gabimdev/checkout-app.git`

Second - install dependencies:

`npm install`

Third - run the server:

`npm start`

For additional information, see the official [React documentation](https://reactjs.org/docs/getting-started.html).

Import Bootstrap in the index.html.

For the CSS put this line inside the <head>:

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

For the JS put this line inside a <script> in the <boby>:

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```

For additional information, see the official [Bootstrap documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

## Stack

-   React - Chosen because it is a popular framework, and the component could be integrated into several projects with this framework.
-   Bootstrap - An easy system to add styles to the project, also popular and used in several projects.
-   Sass - To add personalization to bootstrap styles.
-   Validator - An NPM package for validating form information.

## Acknowledgments

Many thanks to NUWE for proposing this challenge.

## License

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)
