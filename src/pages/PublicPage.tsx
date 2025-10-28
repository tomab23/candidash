import { useParams } from "react-router-dom";

type Params = {
  name: string;
};

const PublicPage = () => {
  const { name } = useParams<Params>();

  return <div>PublicPage de {name}</div>;
};

export default PublicPage;
