const hello = (name: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 1000);
  });

const helloWorld = async () => {
  const res = await hello('world');
  return res;
};

export default helloWorld;
