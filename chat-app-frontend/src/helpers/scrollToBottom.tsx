import { animateScroll } from 'react-scroll';

export const scrollToBottom = () => {
    animateScroll.scrollToBottom({
        containerId: 'chat-container',
        duration: 0
    });  
};

export const scrollToBottomAnimated = () => {
    animateScroll.scrollToBottom({
        containerId: 'chat-container',
        duration: 250
    });
};