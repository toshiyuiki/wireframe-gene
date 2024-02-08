const ScrollEvent = () => {
    const elements = Array.from(document.querySelectorAll(`[data-scroll]`));
    const option = {
        root : null,
        rootMargin:'0px',
        threshold: 1.0
    };
    const observer = new IntersectionObserver((box) => {
        box.forEach((boxes) => {
            const type = boxes.target.getAttribute('data-scroll');
            if(type === ''){
                if(boxes.isIntersecting){
                    boxes.target.classList.add('js--on');
                }else{
                    boxes.target.classList.remove('js--on');
                }
            }else if(type === 'fin'){
                if(boxes.isIntersecting){
                    boxes.target.classList.add('js--on');
                    observer.unobserve(boxes.target);
                }
            }
        });
    },option);
    elements.forEach((ele) => {
        observer.observe(ele);
    });
};
export const useScrollEvent = () => {
    return {
        ScrollEvent,
    }
}