import { useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  sliderTranslateXValue: number;
  setSliderTranslateXValue: Dispatch<SetStateAction<number>>;
  sliderResponsiveDraggableValue: number;
}

const SliderContext = createContext<Props>({
  sliderTranslateXValue: 0,
  setSliderTranslateXValue: () => {},
  sliderResponsiveDraggableValue: 584,
});

const SliderContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [sliderTranslateXValue, setSliderTranslateXValue] = useState<number>(0);
  const a = useBreakpoint();
  const sliderResponsiveDraggableValue = useBreakpointValue({
    base: 258,
    sm: 460,
    md: 596,
    lg: 454,
    xl: 454,
    "2xl": 584,
  }) as number;

  return (
    <SliderContext.Provider
      value={{
        sliderTranslateXValue,
        setSliderTranslateXValue,
        sliderResponsiveDraggableValue,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export default SliderContextProvider;

export const useSliderContext = () => useContext(SliderContext);
