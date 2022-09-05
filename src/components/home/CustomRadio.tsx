import { useRadio, chakra, VStack, Center, Text } from '@chakra-ui/react';

export default function CustomRadio(props: any) {
  const { icon, label, ...radioProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps);
  return (
    <chakra.label {...htmlProps}>
      <input {...getInputProps({})} hidden />
      <VStack spacing={5} role="group" {...getCheckboxProps()}>
        <Center
          bg="white"
          rounded={'22px'}
          p={'21px'}
          border={state.isChecked ? ' ' : '1px solid #DBE3EF'}
          outline={state.isChecked ? '3px solid  #009688' : 'none'}
          boxShadow="0px 12px 24px rgba(0, 0, 0, 0.04)"
          _hover={
            state.isChecked
              ? {}
              : {
                  borderColor: '#000',
                  '& svg': { color: '#000' },
                  '&::after': { color: '#808080' },
                }
          }
          css={state.isChecked ? { '& svg': { color: '#000' } } : {}}
          cursor="pointer"
        >
          {icon}
        </Center>
        <Text
          color={state.isChecked ? '#009688' : '#05162F'}
          fontSize="14px"
          fontWeight={state.isChecked ? 'bold' : 'regular'}
          _groupHover={state.isChecked ? {} : { color: '#808080' }}
          transition="all .3s ease-out"
          cursor="pointer"
          {...getLabelProps()}
        >
          {label}
        </Text>
      </VStack>
    </chakra.label>
  );
}
