import { Button, IconButton, Img, Menu, MenuButton, MenuItem, MenuList, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assests/images/logo.png'
import canvasbg from '../../assests/images/canvasbg.png'
import { ImDownload2, ImUpload2 } from 'react-icons/im'
import { BsCardImage } from 'react-icons/bs'
import { BiText } from 'react-icons/bi'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { SiIconify } from 'react-icons/si'
import { FaDrawPolygon, FaRegWindowRestore, FaShapes } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { CgGhostCharacter } from 'react-icons/cg'

const Header = () => {

    return (
        <>
            {/* Header */}
            <Stack minH={'16'} bgColor={'#0E2634'} align={'center'} px={'3'} direction={'row'} justify={'end'} >
                <Img src={logo} position={'absolute'} left={'1'} boxSize={'36'} />
                <Stack direction={'row'}>
                    <Button bgColor={'#CD6F71'} color={'white'} _hover={{ bgColor: '#205375', color: 'white' }}>Image Mapping</Button>
                    <Button bgColor={'#CD6F71'} color={'white'} _hover={{ bgColor: '#205375', color: 'white' }}>Work flow</Button>
                </Stack>
            </Stack>
            {/* Save and upload file  */}
            <Stack color={'black'} bgColor={'#205375'} direction={'row'} justify={'flex-end'} pr={'2'}>
                <IconButton _hover={{ color: '#cd6f71' }} _focus={{}} _active={{}} variant={'ghost'} icon={<ImDownload2 />} />
                <IconButton _hover={{ color: '#cd6f71' }} _focus={{}} _active={{}} variant={'ghost'} icon={<ImUpload2 />} />
                <IconButton _hover={{ color: '#cd6f71' }} _focus={{}} _active={{}} variant={'ghost'} icon={<BsCardImage />} />
            </Stack>
            {/* Canvas Area */}
            <Stack direction={'row'} height={'full'}>
                {/* Layers and Assest */}
                <Stack justify={'center'} pl={'2'}>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineDoubleRight />}
                            variant='outline'
                        />
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<SiIconify />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<BiText />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<BsCardImage />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<FaShapes />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<FaDrawPolygon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<VscCode />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<FaRegWindowRestore />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu placement='right'>
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<CgGhostCharacter />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<BiText size={'2em'} />}>
                                Add Text
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
                {/* Canvas */}
                <Stack flex={'3'} bgColor={'#F3F3F3'} bgImage={canvasbg} boxShadow={'inset 0px -5px 10px 2px rgba(0,0,0,0.75)'} h={'100vh'}><Text>Canvas</Text></Stack>
                {/* Designer */}
                <Stack pr={'2'} >
                    <Menu placement='right' >
                        <MenuButton bgColor={'#CD7077'}
                            _hover={{ bgColor: '#205375', color: 'white' }}
                            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                            _focus={{}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineDoubleLeft />}
                            variant='outline'
                        />
                    </Menu>
                    <Stack>
                        <Tabs orientation='vertical' direction='ltr' variant={'unstyled'}>
                            <TabList>
                                <Tab
                                    as={IconButton}
                                    icon={<AiOutlineDoubleLeft />}
                                    variant={'ghost'}
                                    _hover={{ bgColor: '#205375', color: 'white' }}
                                    _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                                    _focus={{}}>
                                </Tab>
                                <Tab
                                    as={IconButton}
                                    icon={<AiOutlineDoubleLeft />}
                                    variant={'ghost'}
                                    _hover={{ bgColor: '#205375', color: 'white' }}
                                    _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                                    _focus={{}}>
                                </Tab>
                                <Tab
                                    as={IconButton}
                                    icon={<AiOutlineDoubleLeft />}
                                    variant={'ghost'}
                                    _hover={{ bgColor: '#205375', color: 'white' }}
                                    _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
                                    _focus={{}}>
                                </Tab>
                            </TabList>
                        </Tabs>
                        {/* <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels> */}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Header