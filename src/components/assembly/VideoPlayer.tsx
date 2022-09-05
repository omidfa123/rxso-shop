import { Box } from '@chakra-ui/react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = () => {
  return (
    <Box
      w={['355px', '400px', '495px']}
      h={['200px', '226px', '280px']}
      mx="auto"
      outline="8px solid #fff"
      borderRadius="8px"
      pos={['relative', 'absolute']}
      zIndex={'99'}
      top={[-10, -36, -28]}
      left={[0, 20, '15%']}
    >
      <ReactPlayer
        url="https://res.cloudinary.com/rixso/video/upload/v1661859817/rixsoShop/landingSlider/game_pzascn.mp4"
        controls
        light={
          'https://res.cloudinary.com/rixso/image/upload/v1661873939/rixsoShop/landingSlider/video_kp5ijg.png'
        }
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default VideoPlayer;
