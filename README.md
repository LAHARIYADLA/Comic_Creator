# Comic_Creator
# Dashtoon_Company_Assignment
### **Objective:**

Develop a simple web application that allows users to create and share a 10-panel comic strip. The comic is generated by inputting text into a form, which is then sent to a text-to-image API using a provided API key.
### Technologies Used 
    - ReactJS
    - Axios
    - Tailwind
### Features 
- Begin your comic creation by clicking the 'Add a comic' button.
- Generate an image based on your provided prompt to kickstart your comic.
- Add dialogue and captions to your comic by entering text for the speech bubbles.
- Choose the desired speech bubble type from the available options.
- ***Arrange and position the speech bubbles on your comic card as per your preference**
- Experience the joy of using the comic creator app.
### How to run on local computer 
   - npm install
   - npm run dev
   
### **Key Requirements:**

1. **User Interface:**
    - Designed a user-friendly UI with a form for inputting text for 10 comic panels.
    - Include a display area for the generated comic panels.
    - Ensure the application is responsive and functional on both desktop and mobile browsers.
2. **API Integration:**
    - Use the provided API key to integrate with the text-to-image API.
    - Handle API responses appropriately and display the images in their respective panels.
3. **Error Handling and Rate Limiting:**
    - Implement user feedback mechanisms for failed API calls or internal errors.

### **Bonus Features (Optional):**

- Ability to add speech bubbles or text annotations on the images.

### **Deliverables:**

- A deployed web app on a URL is best. If thats not possible then submit a github URL with code.

### **Evaluation Criteria:**

- Functionality: The app must be bug-free and match the description.
- User Experience: The app should be intuitive and easy to use.
- Code Quality: Code should be clean, well-documented, and adhere to best practices.

### **Additional Notes:**

- Candidates are encouraged to use any modern web development frameworks and libraries.
- While the focus is on functionality, a well-designed UI will be considered favourably.

We’re excited to see your creative and functional Comic Creator Web Applications!

## Appendix

- How to use the Image Generation API?
    - Utilize the provided code segments within your project to establish a connection with the API.
    - The **`inputs`** field must be populated with the text input provided by the user. This text will serve as the basis for the image generation process.
    - Under normal circumstances, the server is expected to generate an image within approximately 30 seconds for each request.
    - Please note that the initial request might sometimes take longer, potentially up to 10 minutes. This delay is due to the server's warm-up time. Subsequent requests will process at the standard rate.
    - The server is configured to return a single image with the dimensions of 512x512 pixels.
