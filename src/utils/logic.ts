



export const isValidCardNumber = (cardNumber: string): boolean => {

    // Remove any non-digit characters, convert to numbers, and reverse for Luhn processing.
    const digits = cardNumber.replace(/\D/g, "").split("").map(Number).reverse();

    // Apply the Luhn checksum: double every second digit from the right.
    const sum = digits.reduce((acc, digit, index) => {
        if (index % 2 === 1) {
            let doubled = digit * 2;

            // If doubling creates a two-digit number, subtract 9 (equivalent to summing its digits).
            if (doubled > 9) doubled -= 9;
            return acc + doubled;
        }
        return acc + digit;
    }, 0)


    // A card number is valid when checksum is divisible by 10.
    return sum % 10 === 0
}