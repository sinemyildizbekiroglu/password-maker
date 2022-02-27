const createPassword = require("./index");

    it("should create password by extracting the first letter of each word", () => {
        const password1 = createPassword("The only impossible journey is the one you never begin")
        expect(password1).toBe("To1j1toynb");
    });
    

    it("should create password by extracting the first letter of each word", () => {
        const password2 = createPassword("Science is the most reliable guide in life")
        expect(password2).toBe("91tmrg1l");
    });


    it("should create password by extracting the first letter of each word", () => {
        const password3 = createPassword("Keep Calm and Carry On")
        expect(password3).toBe("KC5CO");
    });

