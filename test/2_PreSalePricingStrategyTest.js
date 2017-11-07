const PreSalePricingStrategy = artifacts.require('PreSalePricingStrategy.sol');
const web3 = PreSalePricingStrategy.web3;

const expectThrow = require('./helpers/expectThrow');

async function deployStrategy() {
    return PreSalePricingStrategy.new();
}

contract('PreSalePricingStrategy', function (accounts) {
    let instance;

    const owner = accounts[0];
    const tokenDecimals = 18;
    const ether = web3.toBigNumber(web3.toWei(1, 'ether'));
    /** 910 IDS for 1 ether */
    const defaultTokenPrice = ether.div(910);

    beforeEach(async () => {
        /** 100 tokens for 1 ether */
        instance = await deployStrategy();
        assert.ok(instance);
    });

    it('Check default token price', async function () {
        try {
            assert.equal(
                (await instance.oneTokenInWei()).toString(),
                defaultTokenPrice.toFixed(0)
            );
        } catch (err) {
            assert(false, err.message)
        }
    });

    it('Check calculation of price', async function () {
        try {
            /** Send wei amount for the 1 token */
            const weiToSend = web3.toBigNumber(web3.toWei(1, 'ether')).div(910);
            /** One token received with 18 decimals */
            let tokensReceived = web3.toBigNumber('1e18');

            assert.equal(
                (await instance.calculateTokenAmount(weiToSend, tokenDecimals)).toString(),
                tokensReceived.toString()
            );
        } catch (err) {
            assert(false, err.message)
        }
    });

    it('Check pricing strategy interface', async function () {
        try {
            assert.isTrue(await instance.isPricingStrategy());
        } catch (err) {
            assert(false, err.message)
        }
    })
});