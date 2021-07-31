interface IImage {
  url: string;
  width: number;
  height: number;
}

const images: IImage[] = [
  {
    url: "https://images.unsplash.com/photo-1599475529485-0bae12b0c7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
    width: 1575,
    height: 2100,
  },
  {
    url: "https://images.unsplash.com/photo-1583313217995-f60428dba1d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1583710457367-47de0ea21fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    width: 750,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1599566276129-97d70dfdda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    width: 750,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1599462099816-ade347eb6616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1599547196190-bbde05c756f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    width: 667,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1605037627187-a7555899c3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1605099611480-9fec18828152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1605098801888-def2d3c129e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80",
    width: 282,
    height: 502,
  },
  {
    url: "https://images.unsplash.com/photo-1605086457510-a9ea2d42e5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    width: 751,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1604870773148-61e673491cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    width: 750,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1603116854914-c4b5494fe296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=692&q=80",
    width: 692,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1604870773148-61e673491cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    width: 750,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1605086457510-a9ea2d42e5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    width: 751,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1603490679957-e7c5564540b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1603490679957-e7c5564540b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1605098801888-def2d3c129e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80",
    width: 282,
    height: 502,
  },
  {
    url: "https://images.unsplash.com/photo-1605086457510-a9ea2d42e5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    width: 751,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1604870773148-61e673491cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    width: 750,
    height: 500,
  },
  {
    url: "https://images.unsplash.com/photo-1603490679957-e7c5564540b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1603490679957-e7c5564540b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
  {
    url: "https://images.unsplash.com/photo-1603490679957-e7c5564540b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    width: 334,
    height: 501,
  },
];

const ImagesProvider = () => {
  const get = () => images;
  return {
    get,
  };
};

export const imagesProvider = ImagesProvider();
export type { IImage };
