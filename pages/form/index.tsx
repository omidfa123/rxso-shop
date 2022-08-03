import {
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import { NextPage } from 'next';
import { FormEvent, useState } from 'react';

interface FormData {
  category: string;
  name: string;
  englishName: string;
  price: number | undefined;
  special_price: number | undefined;
  thumbnail: string;
  image: string;
  image2: string;
  details: string;
}

const Form: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    category: '',
    name: '',
    englishName: '',
    price: undefined,
    special_price: undefined,
    thumbnail: '',
    image: '',
    image2: '',
    details: '',
  });

  const handelSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    const req = await axios.post('https://localhost:3000/api/products', {
      category: 'case',
      name: 'کیس کامپیوتر مسcترتک VENTUS',
      englishName: 'MastcserTech VENTUS Case',
      price: 1100000,
      details: [],
      special_price: 0,
      thumbnail:
        'https://www.rixoshop.com/media/catalog/product/cache/1/thumbnail/75x75/9df78eab33525d08d6e5fb8d27136e95/0/1/01_7_7.jpg',
      image:
        'https://www.rixoshop.com/media/catalog/product/cache/1/small_image/190x215/9df78eab33525d08d6e5fb8d27136e95/0/1/01_7_4.jpg',
      image2:
        'https://www.rixoshop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_7_7.jpg',
    });
    const { data } = req;
    clearForm();
  };
  const clearForm = () => {
    setFormData({
      category: '',
      name: '',
      englishName: '',
      price: undefined,
      special_price: undefined,
      thumbnail: '',
      image: '',
      image2: '',
      details: '',
    });
  };
  return (
    <>
      <Flex minH="100vh" w="100%" alignItems="center" justifyContent="center">
        <Flex
          w="50%"
          minH="50vh"
          bg="#fff"
          rounded="2xl"
          boxShadow="2xl"
          py="1.8rem"
          px="2.8rem"
          gap={['1.8rem', '2.8rem']}
          position="relative"
        >
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            pos="absolute"
            top="-10%"
            left="50%"
            transform="translate(-50%,-50%)"
            color="textsecondary"
            w={'400px'}
          >
            ارسال اطلاعات به مانگو دی بی
          </Heading>
          <Flex flexDir="column" gap={8} w="30%">
            <Select
              placeholder="کتگوری خود را انتخاب کنید"
              variant="filled"
              dir="ltr"
              value={formData.category}
              onChange={e =>
                setFormData({ ...formData, category: e.target.value })
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
            <Input
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="نام محصول را وارد کنید"
              px=".8rem"
            />
            <Input
              value={formData.englishName}
              onChange={e =>
                setFormData({ ...formData, englishName: e.target.value })
              }
              placeholder="نام انگیلیسی را وارد کنید"
              px=".8rem"
            />
            <Input
              value={formData.price}
              onChange={e =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
              placeholder="قیمت را وارد کنید"
              px=".8rem"
              type="number"
            />
            <Input
              value={formData.special_price}
              onChange={e =>
                setFormData({ ...formData, special_price: +e.target.value })
              }
              placeholder="قیمیت با تخفیف را وارد کنید"
              px=".8rem"
              type="number"
            />
          </Flex>
          <Flex flexDir="column" gap={8} w="35%">
            <Input
              value={formData.thumbnail}
              onChange={e =>
                setFormData({ ...formData, thumbnail: e.target.value })
              }
              placeholder="ادرس عکس thumbnail (کوچترین)"
            />
            <Input
              value={formData.image}
              onChange={e =>
                setFormData({ ...formData, image: e.target.value })
              }
              placeholder="ادرس عکس دوم وارد کنید (کوچک)"
              px=".8rem"
            />
            <Input
              value={formData.image2}
              onChange={e =>
                setFormData({ ...formData, image2: e.target.value })
              }
              placeholder="ادرس عکس سوم را وارد کنید(بزرگ)"
              px=".8rem"
            />
            <Textarea
              value={formData.details}
              onChange={e =>
                setFormData({ ...formData, details: e.target.value })
              }
              placeholder="توضیحات را وارد کنید"
              px=".8rem"
              resize="none"
              flexGrow={1}
            />
          </Flex>
          <Button
            flexGrow={2}
            alignSelf="center"
            colorScheme={'teal'}
            onClick={handelSubmit}
          >
            ارسال اطلاعات
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Form;
