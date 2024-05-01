// Display initial message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input on stdin
process.stdin.once('data', (input) => {
    // Remove newline character from input and display user's name
    const name = input.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);

    // Display closing message
    process.stdout.write("This important software is now closing\n");

    // Exit the program
    process.exit(0);
});
