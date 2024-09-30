document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    //! used correct element id for the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                //!used correct element id for the dynamic text field 
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's missing from JS concepts?
        //! add async to the concepts, one can also add "promises"
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        //! added the correct parameters to the function to call it properly 
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    //! Added try catch block and async and await keywords for the function
    document.getElementById("solveRoom3").addEventListener("click", async() => {
        try{
            const response = await fetch('directions.json');
            const directions = await response.json();
            const message =  await navigateLabyrinth(directions);
                
            // 🪲 Bug: Incorrect method
            //! change it from innerHTML to text content method-this did not work with an async function 
            document.getElementById("room3Result").innerHTML = message;
            } catch (error) {
                console.error('Error:', error);
                document.getElementById("room3Result").innerHTML = "Something went wrong";
            }
});
});


function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    //! add logic for findMostRecentBook
    const mostRecent = books.reduce((latest, current) => { //!iterates over books array comparing the published date of the books
        const latestDate = new Date(latest.published); //!converts published date string into a date object 
        const currentDate = new Date(current.published);

        return currentDate > latestDate ? current : latest; //!compares the current book's date to the latest book's date and return the most recently published 
    }, books[0]);

    return mostRecent
    //return books.reduce((mostRecent, book) => new Date(book.published) < new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    //!add a method that converts the sets into arrays and filters through the arrays and capture the common values in a new array   
    const intersection = new Set([...setA].filter(concept => setB.has(concept)));
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        //!add await before new Promise
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
        
    }
    
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

