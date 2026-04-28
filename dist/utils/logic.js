export const isValidCardNumber = (cardNumber) => {
    const digits = cardNumber.replace(/\D/g, "").split("").map(Number).reverse();
    const sum = digits.reduce((acc, digit, index) => {
        if (index % 2 === 1) {
            let doubled = digit * 2;
            if (doubled > 9)
                doubled -= 9;
            return acc + doubled;
        }
        return acc + digit;
    }, 0);
    return sum % 10 === 0;
};
//# sourceMappingURL=logic.js.map