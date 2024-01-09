declare module NodeJS {
  interface Require {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
      <T>(id: string, force?: boolean): T;
    };
  }
}

declare module "*.jpg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.png" {
  const value: StaticImageData;
  export default value;
}

declare module "*.gif" {
  const value: StaticImageData;
  export default value;
}

declare module "*.svg" {
  const value: StaticImageData;
  export default value;
}
