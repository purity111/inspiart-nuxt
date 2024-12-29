export default function createObserver(element: Element | null, callback: IntersectionObserverCallback) {
    const options = {
        root: null,
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    if (element) {
        observer.observe(element);
    }
};