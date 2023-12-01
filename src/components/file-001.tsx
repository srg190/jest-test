import { useFecth } from "../customHooks/useFetch";

const File = () => {
  const [data] = useFecth("http://wwww.google.com/live/server");
  return <div>file-001</div>;
};

export default File;
