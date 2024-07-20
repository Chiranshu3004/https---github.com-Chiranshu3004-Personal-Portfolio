import React, { useEffect, useState } from 'react';

const Type = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting 
        ? currentRole.substring(0, text.length - 1) 
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return <span className="typewriter-text">{text}</span>;
};

export default Type;
