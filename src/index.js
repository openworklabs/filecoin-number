const BigNumber = require('bignumber.js')

// stores filecoin numbers in denominations of Fil, not AttoFil
class FilecoinNumber extends BigNumber {
  constructor(amount, denom) {
    if (!denom)
      throw new Error('No Filecoin denomination passed in constructor.')
    const formattedDenom = denom.toLowerCase()
    if (formattedDenom !== 'fil' && formattedDenom !== 'attofil')
      throw new Error('Unsupported denomination passed in constructor.')
    if (formattedDenom === 'attofil') {
      super(new BigNumber(amount).shiftedBy(-18))
    } else {
      super(amount)
    }
  }

  toFil = () => this.toString()

  toAttoFil = () => this.shiftedBy(18).toString()
}

module.exports = FilecoinNumber
