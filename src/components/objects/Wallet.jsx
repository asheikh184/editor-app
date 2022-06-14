import { Button, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import meta from '../../assests/images/metamask.svg'
import coinbase from '../../assests/images/coinbase.svg'
import { useAddress, useDisconnect, useMetamask, useCoinbaseWallet, useWalletConnect } from "@thirdweb-dev/react";



const Wallet = () => {
    const connectWithMetamask = useMetamask();
    const connectWithCoinBase = useCoinbaseWallet()
    const connectWithWalletConnect = useWalletConnect();
    const address = useAddress();
    const disconnectWallet = useDisconnect()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                onClick={onOpen}
                bgColor={'#1890ff'}
                color={'white'}
                _hover={{ bgColor: '', color: 'white' }}
            >
                Connect Wallet
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bgColor={'#001529'} textColor={'white'}>
                    <ModalHeader>Connect a Wallet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack align={'center'} justify={'center'}>
                            <Button onClick={() => connectWithMetamask()} w={'full'} bgColor={'#205375'} _hover={{ color: "#001529" }}>
                                <Stack direction={'row'} align={'center'}>
                                    <Text>Connect MetaMask</Text>
                                    <Img src={meta} boxSize={'6'} />
                                </Stack>
                            </Button>

                            <Button onClick={() => connectWithCoinBase()} w={'full'} bgColor={'#205375'} _hover={{ color: "#001529" }}>
                                <Stack direction={'row'} align={'center'}>
                                    <Text>Connect Coinbase</Text>
                                    <Img src={coinbase} boxSize={'6'} />

                                </Stack>

                            </Button>

                            <Button onClick={() => connectWithWalletConnect()} w={'full'} bgColor={'#205375'} _hover={{ color: "#001529" }}>
                                <Stack direction={'row'} align={'center'}>
                                    <Text> Connect WalletConnect</Text>
                                    <Img src={coinbase} boxSize={'6'} />
                                </Stack>
                            </Button>


                            <Button onClick={disconnectWallet} w={'full'} bgColor={'#205375'} _hover={{ color: "#001529" }}>
                                <Stack direction={'row'} align={'center'}>
                                    <Text> Disconnect Wallet</Text>

                                </Stack>

                            </Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Wallet