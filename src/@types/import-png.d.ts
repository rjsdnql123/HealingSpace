// import로 png를 사용하기
declare module "*.png" {
  const content: string;
  export default content;
}
