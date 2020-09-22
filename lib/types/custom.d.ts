// 定义 ts 不认识的模块的type
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}