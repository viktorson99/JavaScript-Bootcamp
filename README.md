# Project Board

This project comprises JavaScript classes and functionalities to manage projects, tooltips, and project lists dynamically.

## Description

This JavaScript codebase contains classes designed to handle various tasks related to managing projects and tooltips dynamically on a web page. It includes functionalities for:

- Creating and managing tooltips
- Managing project items with buttons for additional information, activation, and completion
- Drag-and-drop functionality between different project lists

## Classes

### `DOMHelper`

- `clearEventListeners(element)`: Removes all event listeners from the specified DOM element.
- `moveElement(elementId, newDestinationSelector)`: Moves a specified element to a new destination within the DOM.

### `Component`

- `constructor(hostElementId, insertBefore)`: Initializes a component with a host element and insertion position.

### `Tooltip` (extends `Component`)

- `constructor(closeNotifierFunction, text, hostElementId)`: Creates a tooltip with close functionality, text content, and a host element.

### `ProjectItem`

- Manages individual project items.
- Handles tooltips, buttons, and drag-and-drop functionality for project items.

### `ProjectList`

- Manages lists of projects (active and finished).
- Handles project switching, adding, and updating project lists.

### `App`

- Initializes and sets up the project lists and their interactions.

## Usage

To use these classes and functionalities in your project:

1. Include the JavaScript file containing these classes in your HTML.
2. Instantiate the `App` class by calling `App.init()`.

## Example

Here's an example of how you might use these classes:

// Instantiate and initialize the application
App.init();

## Event Handling

The JavaScript codebase also includes event handling functionalities for specific elements on the page. Here are some examples:

### Handling Button Clicks

![carbon (3)](https://github.com/viktorson99/JavaScript-Bootcamp/assets/147712129/43aa8c7e-4b96-44cf-8429-082b887737de)


### Handling Form Submission
![carbon](https://github.com/viktorson99/JavaScript-Bootcamp/assets/147712129/a15e5b9c-cc39-4ca7-b3b8-56dfb5376098)

### Mouse Enter Event on a Div Element
![carbon (1)](https://github.com/viktorson99/JavaScript-Bootcamp/assets/147712129/9bc67399-d04a-4874-a9db-b76637234a00)

### Handling List Item Clicks
![carbon (2)](https://github.com/viktorson99/JavaScript-Bootcamp/assets/147712129/2c5ca61c-ddcb-4002-88c5-15b9b2fc0599)




