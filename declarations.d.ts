declare module '*.less' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module "*.png" {
  const value: any;
  export default value;
}