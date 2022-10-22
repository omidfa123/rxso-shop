import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { useEffect, useState } from 'react';
import {
  DeliveryIcon,
  AddCircleIcon,
  InventoryIcon,
  ProductIcon,
  EditIcon,
  DeleteIcon,
} from 'components/common/Icons';
import { uniqueId } from 'lodash';
import useStore from 'store/products';
import Image from 'next/future/image';

type user = {
  email: string;
  image: string;
  name: string;
};
interface Props {
  user: user;
  expires: string;
  _id: string;
  role: string;
}

export const Dashboard = ({ userInfo }: { userInfo: Props }) => {
  const store = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    axios.get('/api/products').then(res => {
      store.setProducts(res.data.data);
    });
  }, []);

  const [fileToUpload, setFileToUpload] = useState<string | File>('');
  const [publicId, setPublicId] = useState('');
  const [image, SetImage] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    quantity: 0,
  });
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', fileToUpload);
    formData.append('folder', 'rixsoShop');
    formData.append('public_id', publicId);

    const req = await axios.post('/api/upload', formData);
    SetImage(req.data.url);
  };

  const handleSubmit = async () => {
    const res = await axios.post('/api/products', {
      category: product.category,
      name: product.name,
      englishName: product.name,
      price: 0,
      special_price: 0,
      thumbnail: image,
      image: image,
      image2: image,
    });
    store.addProduct(res.data.data);
  };
  const options = [
    {
      icon: <ProductIcon boxSize="24px" />,
      description: 'محصولات',
      id: +uniqueId(),
    },
    {
      icon: <InventoryIcon boxSize="24px" />,
      description: 'موجودی',
      id: +uniqueId(),
    },
    {
      icon: <DeliveryIcon boxSize="24px" />,
      description: 'سفارش ها',
      id: +uniqueId(),
    },
  ];
  return (
    <>
      <Container maxW={'1440px'} px="8.4375rem" pos="relative">
        <VStack h="666px" w="270px" spacing={8}>
          <HStack
            w="full"
            h={32}
            bgColor="textsecondary"
            rounded={20}
            mt={22}
            alignItems="center"
            py="1.875rem"
            ps="1.875rem"
            spacing={6}
          >
            <Avatar
              name={omidfa}
              src="https://res.cloudinary.com/rixso/image/upload/v1660634112/rixsoShop/usersDefault/user-5.png"
              size="lg"
            />
            <VStack spacing={2}>
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                color="white"
                textTransform="capitalize"
                letterSpacing={'wide'}
              >
                omidfa
              </Text>
              <Text color="#DBE3EF" fontSize="xl" fontWeight="regular">
                omidfa@gmail.com
              </Text>
            </VStack>
          </HStack>
          <VStack w="100%" h="100%" bgColor="white" rounded={20} p={'18px'}>
            <Tabs
              orientation="vertical"
              variant="unstyled"
              onChange={index => setActiveTab(index)}
              width="full"
            >
              <TabList w="full">
                {options.map((option, index) => (
                  <Tab key={option.id}>
                    <HStack
                      w="full"
                      spacing={6}
                      justify="start"
                      bgColor={
                        activeTab === index ? 'rgba(0,150,136,0.2)' : 'white'
                      }
                      color={
                        activeTab === index ? 'primary.500' : 'textprimary'
                      }
                      py="12px"
                      px="18px"
                      rounded={60}
                      pos="relative"
                      _hover={activeTab === index ? {} : { bgColor: '#eee' }}
                      _before={
                        activeTab === index
                          ? {
                              content: '""',
                              position: 'absolute',
                              top: '0',
                              right: '-17%',
                              width: '8px',
                              height: '100%',
                              backgroundColor: 'rgb(0,150,136)',
                              borderRadius: '12px 0px 0px 12px',
                            }
                          : {}
                      }
                    >
                      {option.icon}
                      <Text fontSize="md" fontWeight="medium">
                        {option.description}
                      </Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels
                pos="absolute"
                left={'8.4375rem'}
                top={'22px'}
                maxW="calc(100% - 570px)"
                h="97%"
                rounded={'20px'}
                bgColor="rgba(250,250,250,0.5)"
                p={5}
              >
                <TabPanel bgColor="white" h="full" rounded={20} p={5}>
                  <HStack justifyContent={'space-between'}>
                    <Text fontSize="2xl" fontWeight="medium">
                      مدیریت محصولات
                    </Text>
                    <Button
                      colorScheme="gray"
                      variant="solid"
                      leftIcon={<AddCircleIcon />}
                      onClick={onOpen}
                    >
                      محصول جدید
                    </Button>
                  </HStack>
                  <Divider my={5} />
                  <TableContainer
                    h={'89.3%'}
                    overflowY="scroll"
                    pl={1}
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '4px',
                        background: '#B6C5DC',
                        borderRadius: '7px',
                        opacity: '0.5',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: '#879DBF',
                        borderRadius: '7px',
                        opacity: '0.7',
                        borderRight: 'none',
                        borderLeft: 'none',
                      },
                    }}
                  >
                    <Table variant={'striped'} size="sm">
                      <TableCaption>
                        لیست محصولات موجود در ریکسوشاپ
                      </TableCaption>
                      <Thead>
                        <Tr>
                          <Th>تصویر</Th>
                          <Th>نام محصول</Th>
                          <Th>دسته‌بندی</Th>
                          <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {store.products.map((product, index) => (
                          <Tr key={product._id}>
                            <Td>
                              <Box mixBlendMode={'multiply'}>
                                <Image
                                  src={product.image ?? image}
                                  width={64}
                                  height={64}
                                  alt={product.name}
                                />
                              </Box>
                            </Td>
                            <Td fontWeight={'semibold'} fontSize="md">
                              {product.name}
                            </Td>
                            <Td fontWeight={'semibold'} fontSize="md">
                              {product.category}
                            </Td>
                            <Td>
                              <ButtonGroup>
                                <IconButton
                                  aria-label="ویرایش"
                                  icon={<EditIcon boxSize="24px" />}
                                  colorScheme="teal"
                                />
                                <IconButton
                                  aria-label="حذف"
                                  icon={<DeleteIcon boxSize="24px" />}
                                  onClick={() => {
                                    store.deleteProduct(product._id);
                                  }}
                                />
                              </ButtonGroup>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel bgColor="white" h="full" rounded={20} p={5}>
                  <HStack justifyContent={'space-between'}>
                    <Text fontSize="2xl" fontWeight="medium">
                      مدیریت قیمت و موجودی ها
                    </Text>
                    <Button colorScheme="teal" variant="solid">
                      ذخیره
                    </Button>
                  </HStack>
                  <Divider my={5} />
                  <TableContainer
                    h={'89.3%'}
                    overflowY="scroll"
                    pl={1}
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '4px',
                        background: '#B6C5DC',
                        borderRadius: '7px',
                        opacity: '0.5',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: '#879DBF',
                        borderRadius: '7px',
                        opacity: '0.7',
                        borderRight: 'none',
                        borderLeft: 'none',
                      },
                    }}
                  >
                    <Table variant={'striped'} size="lg">
                      <TableCaption>قیمت ها و موجودی ها</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>کالا</Th>
                          <Th textAlign={'left'}>قیمت</Th>
                          <Th textAlign={'left'}>موجودی</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {store.products.map((product, index) => (
                          <Tr key={product._id}>
                            <Td fontWeight={'semibold'} fontSize="md">
                              {product.name}
                            </Td>
                            <Td isNumeric fontWeight={'semibold'} fontSize="md">
                              <Editable
                                defaultValue={product.price
                                  .toLocaleString('fa-IR')
                                  .replace(/٬/g, '٫')}
                              >
                                <EditablePreview />
                                <EditableInput type="number" w="50%" />
                              </Editable>
                            </Td>
                            <Td isNumeric fontWeight={'semibold'} fontSize="md">
                              <Editable
                                defaultValue={index
                                  .toLocaleString('fa-IR')
                                  .replace(/٬/g, '٫')}
                              >
                                <EditablePreview />
                                <EditableInput type="number" w="50%" />
                              </Editable>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel>
                  <p>three</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </VStack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered trapFocus={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>افزودن / ویرایش کالا</ModalHeader>
          <ModalBody>
            <VStack spacing={5}>
              <FormControl>
                <FormLabel htmlFor="title">تصویر کالا</FormLabel>
                <InputGroup>
                  <InputLeftElement onClick={handleUpload}>
                    <AddCircleIcon />
                  </InputLeftElement>
                  {image && (
                    <InputRightElement pointerEvents="none">
                      <Image src={image} width={32} height={32} alt="" />{' '}
                    </InputRightElement>
                  )}
                  <Input
                    type="file"
                    onChange={e =>
                      e.target.files && setFileToUpload(e.target.files[0])
                    }
                    css={{
                      '&::-webkit-file-upload-button': {
                        visibility: 'hidden',
                      },
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>نام کالا</FormLabel>
                <Input
                  onChange={e => {
                    setPublicId(e.target.value);
                    setProduct({ ...product, name: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>دسته‌بندی</FormLabel>
                <Select
                  value={product.category}
                  onChange={e =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  <option value="manitor">مانیتور</option>
                  <option value="case">کیس</option>
                  <option value="ssd">حافظه ssd</option>
                  <option value="hhd">هارد دیسک</option>
                  <option value="fan">فن</option>
                  <option value="ram">رم</option>
                  <option value="motherBord">مادربورد</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>توضیحات</FormLabel>
                <Textarea />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={() => {
                onClose();
                handleSubmit();
              }}
              mx="auto"
            >
              ذخیره
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
