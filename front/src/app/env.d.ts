interface Photo {
  alt: string;
  src: string;
}

interface MenuItem {
  title: string;
  link: string;
}

declare module 'assets/images.json' {
  const photos: Photo[];
  export default photos;
}

declare module 'assets/header.json' {
  const header: MenuItem[];
  export default header;
}
