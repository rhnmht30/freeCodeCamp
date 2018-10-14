function telephoneCheck(str) {
    // Good luck!
    let myregex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    return myregex.test(str);
}

telephoneCheck("555-555-5555");