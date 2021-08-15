# use-justified-layout

Flickr's [justified-layout](https://github.com/flickr/justified-layout) in a React hook. Calculate justified layouts to create beautiful image galleries or whatever you want.

![gallery preview](https://i.ibb.co/p2KrGZv/chrome-jn-Ozj-QAx-X9.png)

### Installation

```sh
npm i use-justified-layout
```

### Basic usage

````tsx
import useJustifiedLayout from 'use-justified-layout'
import images from './images'

const Gallery = () => {
  const [layout] = useJustifiedLayout({
    layoutInput: images
  })
    
  return (
    <div style={{position: "relative", height={layout.containerHeight}}>
      {layout.boxes.map(({width, height, top, left}, index) => (
        <img
          width={width}
          height={height}
          style={{ top, left, position: "absolute" }}
          src={images[index].url}
        />
      ))}
    </div>
  )
}
````

### Hook API

##### Return

`useJustifiedLayout` returns and array of two elements: `[layout, layoutIsReady]`

- `layoutIsReady`: a `boolean` that indicates whether or not the `layout` calculation is ready. Useful in cases where you want to show a loader to the user.

- `layout`: the `LayoutGeometry` object returned by the original `justified-layout` library. The type is defined as follow:

  ````typescript
  type LayoutGeometry = {
    containerHeight: number;
    widowCount: number;
    boxes: Box[];
  };
  ````

  - `containerHeight` is the `height` of the complete layout, it is necessary since you need to use `position: absolute` to display the items. This attribute will help you avoid things to overlap in your `DOM`.

  - `widowCount` is the number of items at the end of a layout that doesn't make a full row. For example, the next layout will have a `widowCount` value of `2`.

    ![image-20210815143049152](https://i.ibb.co/xJp3m9k/chrome-Tm-WE9uk5hz.png)

  - `boxes` are the calculated attributes for every item in your layout. A `box` has the following shape:

    ````typescript
    type Box = {
      aspectRatio: number;
      top: number;
      width: number;
      height: number;
      left: number;
    };
    ````

##### Params

The hooks accepts a object with the following shape:

````typescript
interface IUseJustifiedLayout {
  layoutInput: LayoutInput;
  configuration?: LayoutConfiguration;
  dependencies?: ReadonlyArray<unknown>;
}
````

- `layoutInput`: information about the items, necessary to calculate the layout.

  ````typescript
  type AspectRatio = number;
  
  type SizeObject = {
    width: number;
    height: number;
  };
  
  type LayoutInput = AspectRatio[] | SizeObject[];
  ````

  As you can see, you have to options when passing `layoutInput`:

  - Aspect ratios: `[1.33, 1, 0.65]`

  - Size objects: 

    ````typescript
    [{
        width: 400,
        height: 300
    },
    {
        width: 300,
        height: 300
    },
    {
        width: 250,
        height: 400
    }]
    ````

- `dependencies`: this is an array with the same function as the dependencies array that you pass to an `useEffect` hook. When a value of this array changes, the layout gets recalculated. By default, the layout will recalculate if the `layoutInput` changes.

- `configuration`: you can use the following attributes to customize the `layout` output. This table comes from the `justified-layout` library documentation (with a slight modifications), you can see the original [here](https://flickr.github.io/justified-layout/).

  | Name                        | Type                         | Default | Description                                                  |
  | --------------------------- | ---------------------------- | ------- | ------------------------------------------------------------ |
  | containerWidth              | `number`                     | 1060    | The width that boxes will be contained within irrelevant of padding. |
  | containerPadding            | `number` |`ContainerPadding` | 10      | Provide a single integer to apply padding to all sides or provide an `ContainerPadding `object to apply individual values to each side, it has the following attributes: `right`, `left`, `top` and `bottom` |
  | boxSpacing                  | `number`| `BoxSpacing`       | 10      | Provide a single integer to apply spacing both horizontally and vertically or provide an `BoxSpacing` object to apply individual values to each axis, it has the following attributes: `horizontal` and `vertical` |
  | targetRowHeight             | `number`                     | 0.25    | How far row heights can stray from `targetRowHeight`. `0` would force rows to be the `targetRowHeight` exactly and would likely make it impossible to justify. The value must be between `0` and `1` |
  | maxNumRows                  | `number`                     | none    | Will stop adding rows at this number regardless of how many items still need to be laid out. |
  | forceAspectRatio            | `boolean` | `number`         | false   | Provide an aspect ratio here to return everything in that aspect ratio. Makes the values in your input array irrelevant. The length of the array remains relevant. |
  | showWidows                  | `boolean`                    | true    | By default we'll return items at the end of a justified layout even if they don't make a full row. If `false` they'll be omitted from the output. |
  | fullWidthBreakoutRowCadence | `boolean` | `number`         | false   | If you'd like to insert a full width box every `n` rows you can specify it with this parameter. The box on that row will ignore the `targetRowHeight`, make itself as wide as `containerWidth` - `containerPadding` and be as tall as its aspect ratio defines. It'll only happen if that item has an aspect ratio >= 1. Best to have a look at the examples to see what this does. |

### Configuration examples

Please visit the [`justified-layout` documentation](https://flickr.github.io/justified-layout/) to get more ideas on how to play with the configurations.

### Demos

WIP :)