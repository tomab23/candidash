import UpdateCard from "./cards/UpdateCard";

const UpdatesList = () => {
  return (
    <div className="mt-10 max-sm:mt-5">
      <UpdateCard update={"add"}  date={"2025-09-24"}>
        <div>TEST</div>
      </UpdateCard>
    </div>
  );
};

export default UpdatesList;
