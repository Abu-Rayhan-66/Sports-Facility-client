import ContactDetails from "../../Components/ContactDetails/ContactDetails";
import HistoryAndMilestone from "../../Components/HistoryAndMilestone/HistoryAndMilestone";
import MeetOurTeam from "../../Components/MeetOurTeam/MeetOurTeam";
import PurposeAndValue from "../../Components/PurposeAndValue/PurposeAndValue";

const AboutUs = () => {
  return (
    <div className="mt-24">
      <div>
        <HistoryAndMilestone></HistoryAndMilestone>
        <MeetOurTeam></MeetOurTeam>
        <ContactDetails></ContactDetails>
        <PurposeAndValue></PurposeAndValue>
      </div>
    </div>
  );
};

export default AboutUs;
