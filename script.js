async function hashCode(code) {
    const msgUint8 = new TextEncoder().encode(code); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', async() => {
    function generateRandomLetter() {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        return letters[Math.floor(Math.random() * letters.length)];
    }

    function generateRandomDigit() {
        return Math.floor(Math.random() * 10).toString();
    }

    function generateUniqueCode() {
        let uniqueCode = '';
        for (let i = 0; i < 7; i++) {
            uniqueCode += generateRandomLetter() + generateRandomDigit();
        }
        return uniqueCode;
    }

    const uniqueCode = generateUniqueCode();
    const hashedCode = await hashCode(uniqueCode);

    localStorage.setItem('uniqueCodeHash', hashedCode);

    location.href = `redirect.html?code=${uniqueCode}`;
});