export const ETHER_ADDRESS = '0x53b416E0d06C04828ad258d28B7A87C37d6E8397'

export const EVM_REVERT = 'VM Exception while processing transaction: revert'

export const ether = (n) => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
}

// Same as ether
export const tokens = (n) => ether(n)
