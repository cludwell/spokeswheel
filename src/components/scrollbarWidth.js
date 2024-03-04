export default function getScrollbarWidth() {
  // Create a temporary div container and append it into the body
  const container = document.createElement("div");
  container.style.visibility = "hidden";
  container.style.overflow = "scroll"; // Force scrollbar to appear
  document.body.appendChild(container);

  // Create an inner div and append it into the container
  const inner = document.createElement("div");
  container.appendChild(inner);

  // Calculate the scrollbar width
  const scrollbarWidth = container.offsetWidth - inner.offsetWidth;

  // Remove the container from the body
  document.body.removeChild(container);

  return scrollbarWidth;
}
