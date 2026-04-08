import type Candidature from "@/models/Candidature";

type Props = {
  candidature: Candidature;
};

const InterestCard = ({ candidature }: Props) => {
  return (
    <div>InterestCard - {candidature.job}</div>
  )
}

export default InterestCard