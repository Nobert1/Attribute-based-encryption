const mcl = require("mcl-wasm");

const setup = () => {
    let G1 = new mcl.G1();
    let G2 = new mcl.G2();
    // Filling the arrays with random values
    G1.a_ = mcl.getRandomValues(G1.a_);
    G2.a_ = mcl.getRandomValues(G2.a_);
    // Picking one element from the arrays at random
    let g1 = G1.a_[Math.floor(Math.random() * G1.a_.length)];
    let g2 = G2.a_[Math.floor(Math.random() * G2.a_.length)];

    console.log(g1, g2);

    let beta = 3;
    let h = Math.pow(g2, beta);
    let f = Math.pow(g2, 1 / beta);

    let alpha = 7;
    let g1Alpha = Math.pow(g1, alpha);
    // let eGGAlpha = mcl.pairing(G1, G2);

    // console.log(eGGAlpha);

    return {
        publicKey: { G1, G2, h, f, eGGAlpha },
        masterKey: { beta, g1Alpha },
    };
};

const keygen = (publicKey, masterKey, attributeList) => {};

const encrypt = (publicKey, message, policyString) => {};

const decrypt = (cipherText, privateKey) => {};

setup();
// console.log(setup());
