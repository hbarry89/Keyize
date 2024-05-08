# Keyize
Pronounced as *key-eyes* 🔑 👀

An NPM package that formats the keys of JSON payloads.
- It converts snake_case and camelCase strings to Title Case strings.
- It also converts ```id``` to uppercase ```ID```.

## Installation
```bash
npm install keyize
```

## Usage
```javascript
const keyize = require('keyize');
```

## Example
```javascript
{
    'firstName': 'test',
    'first_name': 'test',
    'UserId': 0,
    'user_id': 0,
    'id': 0
}
```

## Output
```javascript
keyzie("firstName"); // Output: First Name
keyzie("first_name"); // Output: First Name
keyzie("userId"); // Output: User ID
keyzie("user_id"); // Output: User ID
keyzie("id"); // Output: ID
```

## Sample Usage

### Test data
```
userId: 1
id: 1
title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
body: quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto
```

### Use keyize
```javascript
const keyize = require('keyize');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                console.log(`${keyize(key)}: ${value}`);
            });
        }); 
    })
    .catch(error => {
        console.error(error);
    });
```

### Result

```
User ID: 1
ID: 1
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto
```

See full sample usage [here](https://github.com/hbarry89/keyize-testing).

## License
MIT

## Author
[Huda Barry](https://github.com/hbarry89)