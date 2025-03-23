import React, { useState, useEffect } from 'react';
import { Text, IconButton, VStack } from '@chakra-ui/react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const TextToSpeech = ({ text, fontFamily, fontSize, color, mb }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const speech = new SpeechSynthesisUtterance(text);
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    const handleSpeechEnd = () => setIsSpeaking(false);
    window.speechSynthesis.addEventListener('voiceschanged', handleSpeechEnd);
    return () => {
      window.speechSynthesis.removeEventListener(
        'voiceschanged',
        handleSpeechEnd
      );
    };
  }, []);

  return (
    <VStack spacing={4} mb={mb} align="center">
      <Text
        fontFamily={fontFamily}
        fontSize={fontSize}
        color={color}
        textAlign="center"
      >
        {text}
      </Text>
      <IconButton
        aria-label={isSpeaking ? 'Stop voice' : 'Play voice'}
        icon={isSpeaking ? <FaVolumeMute /> : <FaVolumeUp />}
        onClick={handleSpeak}
        colorScheme={isSpeaking ? 'red' : 'blue'}
        size="lg"
      />
    </VStack>
  );
};

export default TextToSpeech;
