import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: '#1E385F',
    dark: '#1E385F',
  };
  return (
    <Tooltip
      label={colorMode === 'dark' ? 'لایت مود' : 'دارک مود'}
      offset={[0, 13]}
    >
      <span>
        <IconButton
          aria-label="دارک مود"
          icon={
            colorMode === 'dark' ? (
              <SunIcon boxSize={4} />
            ) : (
              <MoonIcon boxSize={4} />
            )
          }
          w="42px"
          h="42px"
          isRound
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          variant="ghost"
          opacity={0.8}
        />
      </span>
    </Tooltip>
  );
};

export default DarkModeSwitch;
