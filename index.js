function keyize(str) {
    let words = str.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    
    let titleCaseWords = words.map(word => {
        if (word.toLowerCase() === 'id') {
            return 'ID';
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    
    let titleCaseStr = titleCaseWords.join(' ');
    
    return titleCaseStr;
}

module.exports = keyize