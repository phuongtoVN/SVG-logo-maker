
#Logo Generator
This command-line application allows freelance web developers to generate simple logos for their projects without having to hire a graphic designer. It prompts the user for text, text color, shape, and shape color to create a custom logo in SVG format.

#User Story
As a freelance web developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

#Acceptance Criteria
The command-line application should accept user input.
The user should be prompted to enter up to three characters for the logo text.
The user should be prompted to enter the text color using a color keyword or a hexadecimal number.
The user should be presented with a list of shapes to choose from: circle, triangle, and square.
The user should be prompted to enter the shape's color using a color keyword or a hexadecimal number.
After entering input for all the prompts, an SVG file named logo.svg should be created.
The output text "Generated logo.svg" should be printed in the command line.
Opening the logo.svg file in a browser should display a 300x200 pixel image that matches the entered criteria.

#Usage
Install the required dependencies by running npm install in the project directory.

Run the application by executing node index.js in the command line.

Follow the prompts to enter the desired logo text, text color, shape, and shape color.

Once all the input is provided, an SVG file named logo.svg will be generated in the project directory.

Open the logo.svg file in a web browser to view the generated logo.

#Technologies Used
Node.js
Inquirer.js
SVG (Scalable Vector Graphics)

#License
This project is licensed under the MIT License.

Feel free to add additional sections or customize the README according to your specific project requirements.
