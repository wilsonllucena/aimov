import React from 'react';
import { useTransition, animated } from 'react-spring';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/ToastContext';
import { Container } from './styles';

interface ToastConteinerProps {
  messages: ToastMessage[];
}
const ToastContainer: React.FC<ToastConteinerProps> = ({ messages }) => {
  // Isso é do react-spring pra fazer uma animação
  const messagesWithTransitions = useTransition(
    messages,
    {
      from: { right: '-120%', opacity: '0' },
      enter: { right: '0%', opacity: '1' },
      leave: { right: '-120%', opacity: '0' },
    },
  );

  return (
    <>
      <Container>
              {messagesWithTransitions(({ opacity }, item) => (
                   <Toast key={item.id} style={opacity} message={item} />
             ))}
      </Container>
    </>
  );
};

export default ToastContainer;
