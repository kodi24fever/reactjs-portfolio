export default function SmoothScrollTo(containerByID) {
    const node = document.getElementById(containerByID);
  
    window.scrollTo({
        top: node.offsetTop,
        behavior: "smooth"
    });
}