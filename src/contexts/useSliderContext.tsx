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
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}

const SliderContext = createContext<Props>({
  currentImageIndex: 0,
  setCurrentImageIndex: () => {},
});

const SliderContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <SliderContext.Provider
      value={{
        currentImageIndex,
        setCurrentImageIndex,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export default SliderContextProvider;

export const useSliderContext = () => useContext(SliderContext);
