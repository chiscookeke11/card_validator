



export const isValidCardNumber = (cardNumber: string): boolean => {

    // Keep only numeric characters to support formatted input like "4242-4242-4242-4242".
    const digits = cardNumber.replace(/\D/g, "").split("").map(Number).reverse();


    const sum = digits.reduce((acc, digit, index) => {
        // In the reversed sequence, every second digit is doubled (Luhn algorithm).
        if (index % 2 === 1) {
            let doubled = digit * 2;
            // If doubling creates two digits, subtract 9 (same as summing the digits).
            if (doubled > 9) doubled -= 9;
            return acc + doubled;
        }
        return acc + digit;
    }, 0)

    // A valid card number must produce a checksum divisible by 10.
    return sum % 10 === 0
}
