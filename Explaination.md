Function Explaination:

```javascript
function keyize(str) {
    // Replace underscores with spaces and split the string by camel case
    let words = str.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    
    // Capitalize the first letter of each word
    let titleCaseWords = words.map(word => {
        // Check if the word is "id" and add a space before it
        if (word.toLowerCase() === 'id') {
            return 'ID';
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    
    // Join the words back into a single string
    let titleCaseStr = titleCaseWords.join(' ');
    
    return titleCaseStr;
}
  
// Example usage:
console.log(keyize("firstName")); // Output: First Name
console.log(keyize("first_name")); // Output: First Name
console.log(keyize("userId")); // Output: User ID
console.log(keyize("user_id")); // Output: User ID
console.log(keyize("id")); // Output: ID
```