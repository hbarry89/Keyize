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
```
First Name: test
First Name: test
User ID: 0
User ID: 0
ID: 0
```

## License
MIT

## Author
[Huda Barry](https://github.com/hbarry89)