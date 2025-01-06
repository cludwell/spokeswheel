import { useEffect } from "react";

export default function FocusImageModal({ data, chosenImage, setChosenImage }) {
  const [current, setCurrent] = useState(chosenImage ? chosenImage : 0);
  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
    setChosenImage(current === data.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
    setChosenImage(current === 0 ? data.length - 1 : current - 1);
  };
  useEffect(() => {
    setCurrent(chosenImage ? chosenImage : chosenImage === 0 ? 0 : current);
  }, [chosenImage, current]);
  if (!data || !data.length) return null;

  return <></>;
}
