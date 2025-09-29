import ButtonBack from "../custom/ButtonBack";

type Props = {
    title: string;
}
const Header = ({ title } : Props) => {
  return (
    <div className="flex justify-between items-center mt-5">
      <ButtonBack />
      <h1 className="text-muted-foreground uppercase font-semibold text-xl max-sm:text-sm">
        {title}
      </h1>
    </div>
  );
};

export default Header;
