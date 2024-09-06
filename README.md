# Unit4_Bench2_practice
This is a example of code using things learned in mod2. If you are able to understand all of this, you will be much more prepared for the upcoming benchmark.

1. DOM Manipulation
The DOM (Document Object Model) is a representation of the structure of a webpage. Using JavaScript, you can interact with the DOM to create, modify, or remove elements.

Creating Elements: You can dynamically create new HTML elements, like adding new tasks to a to-do list. Once created, these elements can be inserted into the webpage.

Appending Elements: After creating an element, you attach it to a parent element, making it visible on the page.

Modifying Elements: You can change the content, styles, or attributes of elements in the DOM. This includes changing text, adding or removing classes, and modifying styles (e.g., marking tasks as "completed").

Removing Elements: You can also remove elements from the DOM when they're no longer needed, like deleting a task from a list.

2. Event Handling
JavaScript allows you to listen for user actions or "events" like clicks, form submissions, or hovering over an item.

Event Listeners: You can add an event listener to an element so that when a specific action happens (e.g., a button is clicked), a function is executed. This function is called an event handler.

Common Events: Some common events are:

Click events: Triggered when an element, like a button or a list item, is clicked.
Submit events: Triggered when a form is submitted.
Mouseover and Mouseout events: Triggered when the mouse enters or leaves an element.
3. Event Delegation
Instead of attaching event listeners to each individual element (like each item in a to-do list), you can use event delegation.

Event delegation involves attaching an event listener to a parent element. Since events "bubble" up through the DOM, when a child element (like a task in the to-do list) is clicked, the event listener on the parent element can handle it.
This makes your code more efficient, especially when working with dynamic elements that may be added after the page has loaded.

4. Asynchronous JavaScript: setTimeout and setInterval
Asynchronous functions allow you to run code after a delay or repeatedly at specified intervals:

setTimeout(): This function allows you to run a piece of code after a specified amount of time (e.g., sending a reminder to complete tasks after a certain number of seconds).

setInterval(): This function runs code repeatedly at fixed intervals (e.g., checking every few seconds to mark overdue tasks).

Both functions are useful for implementing timers, reminders, or periodic checks in your programs.

5. Working with Attributes
Elements in HTML often have attributes that provide additional information, like a button having a type attribute or a link having an href attribute. You can:

Get attributes: Retrieve the value of an attribute (e.g., checking the href of a link).

Set attributes: Add or modify an attribute (e.g., adding a custom attribute to store the time a task was created).

Remove attributes: Remove an attribute when it's no longer needed (e.g., clearing a "reminder" attribute).

6. Class Manipulation
The classList property allows you to work with the CSS classes assigned to an element. This is useful for changing the appearance or behavior of elements dynamically.

Adding a class: You can add a new class to an element (e.g., marking a task as "completed").

Removing a class: You can remove a class when it's no longer needed (e.g., unmarking a task as completed).

Toggling a class: You can toggle between adding and removing a class with one function (e.g., clicking a task to mark or unmark it as "completed").

7. Forms and Input Handling
When working with forms, handling the user’s input is a critical part of most interactive web applications.

Form Submission: A form submission triggers an event that you can listen for, allowing you to process the data entered by the user (e.g., adding a new task).

Input Values: You can capture what the user types into form fields (e.g., a task name or a reminder time) and use that data in your program.

Validating Input: Before processing input, it's important to check if it’s valid (e.g., ensuring the user has entered something in the input field and not left it empty).

8. Event Propagation (Bubbling and Capturing)
When an event occurs (like a click), it triggers two phases of event propagation:

Bubbling: The event starts at the clicked element and moves up through its parent elements. For example, if you click a button inside a list item, the click event "bubbles" up from the button to the list item, and then to its parent element (like the list).

Capturing: This is the opposite, where the event starts at the root (parent) and moves down to the clicked element.

Understanding how events propagate helps when you want to control where and how events are handled, like in event delegation.

9. Data Attributes
HTML elements can have custom data attributes, which allow you to store additional data in an element. These attributes are always prefixed with data-.

Adding Data Attributes: You can attach custom information to elements (e.g., storing the time a task was created using data-created-at).

Accessing Data Attributes: JavaScript allows you to easily access or modify these attributes, making them useful for storing dynamic or hidden data in your application.

10. Timers and Reminders
A key concept in many interactive applications is managing time-based functionality:

Reminders: You can use asynchronous functions (like setTimeout()) to remind users of actions they need to take after a delay.

Overdue Checks: By using setInterval(), you can regularly check conditions (like whether tasks are overdue) and update the UI accordingly.

Putting It All Together
To create an interactive application, you use these key concepts in combination. For example:

DOM Manipulation allows you to dynamically add tasks, mark them as completed, and remove them.
Event Handling enables interaction with the user, such as clicking buttons or submitting forms.
Asynchronous JavaScript lets you create timers and reminders, and check conditions at regular intervals.
Class and Attribute Manipulation allows you to style and manage elements dynamically, like marking tasks as overdue or completed.
Event Delegation makes it easier to handle dynamic lists efficiently.
Together, these concepts provide the building blocks for creating any dynamic, interactive web application!
