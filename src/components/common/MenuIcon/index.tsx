import { Center, IconButton, Text } from '@chakra-ui/react';
import Image from 'next/image';

const MenuIcon = () => {
  return (
    <>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="iconcolor"
          bgColor="transparent"
          icon={
            <Image
              src="/assets/img/motherbord_active.png"
              height={50}
              width={48}
            />
          }
        />
        <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
          مادر بورد
        </Text>
      </Center>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="iconcolor"
          bgColor="transparent"
          icon={
            <Image src="/assets/img/ram_active.png" height={56} width={48} />
          }
        />
        <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
          حافظه رم
        </Text>
      </Center>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="iconcolor"
          bgColor="transparent"
          icon={
            <Image src="/assets/img/hard_active.png" height={56} width={48} />
          }
        />
        <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
          هارد دیسک
        </Text>
      </Center>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="activecolor"
          bgColor="activecolor"
          icon={<Image src="/assets/img/img.png" height={96} width={96} />}
          boxShadow="0px 14px 24px rgba(24, 133, 255, 0.2)"
        />
        <Text color={'activecolor'} fontSize={'sm'} fontWeight="medium">
          فن کیس
        </Text>
      </Center>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="iconcolor"
          bgColor="iconcolor"
          icon={<Image src="/assets/img/ssd.svg" height={56} width={48} />}
        />
        <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
          حافظه SSD
        </Text>
      </Center>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="iconcolor"
          bgColor="iconcolor"
          icon={<Image src="/assets/img/wrong.svg" height={56} width={48} />}
        />
        <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
          کیس
        </Text>
      </Center>
      <Center flexDir="column" gap={3}>
        <IconButton
          aria-label={'خرید مانیتور'}
          w="4.5rem"
          h="4.5rem"
          borderRadius="full"
          border="1px"
          borderColor="iconcolor"
          bgColor="iconcolor"
          icon={<Image src="/assets/img/tv.svg" height={56} width={48} />}
        />
        <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
          مانیتور
        </Text>
      </Center>
    </>
  );
};

export default MenuIcon;
