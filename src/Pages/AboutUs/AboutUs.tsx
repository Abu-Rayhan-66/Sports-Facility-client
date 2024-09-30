import ContactDetails from "../../Components/ContactDetails/ContactDetails";
import HistoryAndMilestone from "../../Components/HistoryAndMilestone/HistoryAndMilestone";
import MeetOurTeam from "../../Components/MeetOurTeam/MeetOurTeam";
import PurposeAndValue from "../../Components/PurposeAndValue/PurposeAndValue";

const AboutUs = () => {
  return (
    <div className="mt-24">
      <div>
        <ContactDetails></ContactDetails>
        <PurposeAndValue></PurposeAndValue>
        <MeetOurTeam></MeetOurTeam>
        <HistoryAndMilestone></HistoryAndMilestone>
      </div>
    </div>
  );
};

export default AboutUs;
