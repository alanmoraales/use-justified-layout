import { useState, useEffect } from "react";
import calculateLayout from "justified-layout";
import type {
  LayoutInput,
  LayoutConfiguration,
  LayoutGeometry,
} from "../types";

const initialLayout: LayoutGeometry = {
  containerHeight: 0,
  widowCount: 0,
  boxes: [],
};

interface IUseJustifiedLayout {
  layoutInput: LayoutInput;
  configuration?: LayoutConfiguration;
  dependencies?: ReadonlyArray<unknown>;
}

type UseJusfiedLayoutOutput = [LayoutGeometry, boolean];

const useJustifiedLayout = ({
  layoutInput,
  configuration,
  dependencies = [],
}: IUseJustifiedLayout): UseJusfiedLayoutOutput => {
  const [layout, setLayout] = useState<LayoutGeometry>(initialLayout);
  const [layoutIsReady, setLayoutIsReady] = useState(false);

  useEffect(() => {
    const newLayoutGeometry = calculateLayout(layoutInput, configuration);
    setLayout(newLayoutGeometry);
  }, [layoutInput, ...dependencies]);

  useEffect(() => {
    if (layout && !layoutIsReady) {
      setLayoutIsReady(true);
    }
  }, [layout]);

  return [layout, layoutIsReady];
};

export default useJustifiedLayout;
