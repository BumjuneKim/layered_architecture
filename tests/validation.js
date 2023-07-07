// (1)
module.exports = {
    isEmail: (value) => {
        // value가 이메일 형식에 맞으면 true, 형식에 맞지 않으면 false를 return 하도록 구현해보세요
        return false;
    },
};

// (2)
/**
module.exports = {
    isEmail: (value) => {
        const email = (value || '');

        if (email.split('@').length !== 2) {
            return false;
        } else if (email.includes(' ')) {
            return false;
        } else if (email[0] === '-') {
            return false;
        }

        return true;
    },
}; */

// (3)
/**
module.exports = {
    isEmail: (value) => {
        const email = value || "";
        const [localPart, domain, ...etc] = email.split("@");

        if (!localPart || !domain || etc.length) {
            return false;
        } else if (email.includes(" ")) {
            return false;
        } else if (email[0] === "-") {
            return false;
        }

        for (const word of localPart.toLowerCase().split("")) {
            if (!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","+","_"].includes(word)) {
                return false;
            }
        }

        for (const word of domain.toLowerCase().split("")) {
            if (!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-", "."].includes(word)) {
                return false;
            }
        }

        return true;
    },
};
*/

//(4)
/**
module.exports = {
    isEmail: (value) => {
        const email = value || "";
        const [localPart, domain, ...etc] = email.split("@");

        if (!localPart || !domain || etc.length) {
            return false;
        } else if (email.includes(" ")) {
            return false;
        } else if (email[0] === "-") {
            return false;
        } else if (!/^[a-z0-9+_-]+$/gi.tests(localPart)) {
            return false;
        } else if (!/^[a-z0-9.-]+$/gi.tests(domain)) {
            return false;
        }

        return true;
    },
};
*/
