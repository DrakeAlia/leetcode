// # Programming Primer(in JS) Answers & Notes

// This is an exercise to practice basic programming principles.

// TODO: define addFavoriteBook(..) function
// 1. Define an `addFavoriteBook(..)` function that receives a single parameter, called`bookName`.
function addFavoriteBook(bookName) {
    // 2. If the provided `bookName` string does * NOT * have the word "Great" in it, add it to the `favoriteBooks` array.
    // 	Use`!` to negate a boolean value(change`true` to`false` or vice versa).
    // `someString.includes(anotherString)` will return `true` if `anotherString` is found inside`someString`, or`false` 
    // otherwise.
    if (!bookName.includes("Great")) {
        // `someArray.push(value)` will add a value to the end of the array.
        favoriteBooks.push(bookName)
    }
}

// TODO: define printFavoriteBooks() function
// 3. Define a `printFavoriteBooks()` function that receives no parameters.
function printFavoriteBooks() {
    // 4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books 
    // in the`favoriteBooks` array.
    // Use the \` back-tick operators for strings that need to include values in them.
    // Use `console.log(..)` to print a message to the screen.
    console.log(`Favorite books: ${favoriteBooks.length}`)
    // 5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.
    // Hint: Use the `for (let ..of .. ) { }` style loop.
    for (let bookName of favoriteBooks) {
        console.log(bookName)
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
// 	Make sure to then call the `printFavoriteBooks()` function at the end of the program.
printFavoriteBooks()