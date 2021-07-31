import type { ContainerPadding } from "./ContainerPadding";
import type { BoxSpacing } from "./BoxSpacing";

type LayoutConfiguration = {
  containerWidth?: number;
  containerPadding?: ContainerPadding;
  boxSpacing?: BoxSpacing;
  targetRowHeight?: number;
  targetRowHeightTolerance?: number;
  maxNumRows?: number;
  forceAspectRatio?: boolean | number;
  showWidows?: boolean;
  fullWidthBreakoutRowCadence?: boolean;
};

export type { LayoutConfiguration };
