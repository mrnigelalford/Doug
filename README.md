# Doug Chat Bot

Doug is an internal chat bot for Toca, a soccer company. Doug can help users with various tasks related to the company's operations and communicate with them via the Google Chat API.

## Table of Contents

- [Doug Chat Bot](#doug-chat-bot)
  - [Table of Contents](#table-of-contents)
  - [Public Url](#public-url)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Public Url
To access this endpoint for staging using this URL:
`https://us-east1-player-portal-staging.cloudfunctions.net/doug `

## Installation

To install Doug, you'll need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your system.

1. Clone this repository: `git clone https://github.com/your-username/doug.git`
2. Navigate to the project directory: `cd doug`
3. Install dependencies: `npm install`
4. Create a `.env` file with your Google Cloud Platform project credentials (see `.env.example` for an example)
5. Compile TypeScript code: `npm run build`

## Usage

To start Doug, run `npm start` in the project directory. This will start the Express server and connect to the Google Chat API using your credentials. Doug will then be able to receive and respond to chat messages in your Google Chat spaces.

To send a message to Doug, mention him in a Google Chat message (e.g. `@Doug help`). Doug will respond with a message containing a list of available commands.

## Contributing

Contributions to Doug are welcome! To contribute:

1. Fork this repository
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push your changes to your fork: `git push origin my-feature-branch`
5. Create a new pull request on this repository

Please ensure that your code follows the existing style and conventions, and that it is properly tested before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
