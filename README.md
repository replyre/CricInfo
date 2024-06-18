# CricInfo Chrome Extension
![Screenshot (475)](https://github.com/replyre/CricInfo/assets/121796450/365de6b0-b1be-4484-92b6-57e92c2a2c3e)

## Overview

Welcome to the CricInfo Chrome Extension! This extension allows you to view live cricket scores and completed match details directly from your Chrome browser. You can filter and search for specific matches, view both live and completed matches, and stay up-to-date with your favorite teams and tournaments.

## Features
![Screenshot (476)](https://github.com/replyre/CricInfo/assets/121796450/18f79532-edd7-46a0-ac5a-d7183b3e0a44)

- **Live Matches**: Get real-time scores of ongoing cricket matches.
- **Completed Matches**: View the details and scores of recently completed matches.
- **Search Functionality**: Easily find matches by team names, tournament, or match type.
- **Filter Options**: Filter matches based on status (live or completed).

## Getting Started

### Prerequisites

Before you can start using the extension, you need to have the following:

- A Chrome browser installed on your computer.
- An API key from [CricketData](https://cricketdata.org/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/replyre/CricInfo.git
    ```
2. **Navigate to the directory**:
    ```bash
    cd CricInfo
    ```

3. **Open Chrome and go to the Extensions page**:
    - Navigate to `chrome://extensions/`
    - Enable "Developer mode" by clicking the toggle switch in the top right corner.

4. **Load the extension**:
    - Click the "Load unpacked" button and select the directory where you cloned the repository.

### Configuration

1. **Obtain an API key**:
    - Sign up or log in to [CricketData](https://cricketdata.org/) to obtain your API key.

2. **Enter your API key**:
    - Open the `config.js` file in the extension directory.
    - Replace the placeholder with your actual API key:
    ```javascript
    export const API_KEY = "your api key";
    ```

## Usage

Once the extension is installed and configured, you can start using it right away:

1. **Open the extension**:
    - Click on the Cricket Live Score icon in the Chrome toolbar.

2. **View matches**:
    - The extension will display a list of all current live matches by default.

3. **Search for matches**:
    - Use the search bar to find specific matches by team name or tournament.

4. **Filter matches**:
    - Use the filter options to switch between live and completed matches.

## File Structure

- `index.html`: The main HTML file for the extension's popup interface.
- `script.css`: The CSS file for styling the extension's popup interface.
- `script.js`: The JavaScript file containing the logic for fetching and displaying match data.
- `config.js`: Configuration file to store your API key.

## Development

### HTML

The HTML file (`index.html`) contains the structure of the extension's user interface. It includes elements such as the search bar, filter buttons, and the match list container.

### CSS

The CSS file (`script.css`) is used to style the extension's user interface, ensuring a clean and user-friendly design.

### JavaScript

The JavaScript file (`script.js`) handles the core functionality of the extension, including:

- Fetching match data from the CricketData API.
- Displaying live and completed matches.
- Implementing search and filter features.

### Configuration

The `config.js` file stores your CricAPI key. Ensure this file is updated with your personal API key to allow the extension to fetch match data.

## Contributing

We welcome contributions to improve this extension. If you have any suggestions or improvements, please feel free to submit a pull request or open an issue on the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Cricket Live Score Chrome Extension! Enjoy staying up-to-date with all the cricket action right from your browser.
