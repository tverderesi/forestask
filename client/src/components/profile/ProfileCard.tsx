import CustomAccordionItem from "./accordion/CustomAccordionItem";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
} from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import ProfileHeader from "./ProfileHeader";
import FiltersRow from "./FiltersRow";
import FiltersHeader from "./FiltersHeader";
import Logo from "../../atoms/Logo";
import { TreeSpinner } from "../../atoms/interface/TreeSpinner";

function ProfileCard({ userData, loading }) {
  const {
    subjects,
    page,
    dataTheme,

    cardsPerPage,
    activities,
    subjectPalette,
    activityPalette,
    filters,
    windowHeight,
    dispatch,

    gameLevels,
  } = useContext(AppContext);

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  return (
    <div className="backdrop-blur-xl bg-blend-overlay bg-card rounded-2xl h-[calc(87vh+1rem)] w-[30vw] min-w-[350px] shadow-2xl relative top-8 flex flex-col ml-[5vw]">
      {loading ? (
        <TreeSpinner />
      ) : (
        <>
          <div className="rounded-t-2xl bg-[var(--softer-accent-bg-color)] h-[max(30vh,12rem)] bg-blend-overlay w-full">
            <Logo className="justify-center pt-3" />
            <ProfileHeader userData={userData} />
          </div>
          <div className="px-3 relative top-0 h-[calc(100%-max(30vh,12rem)-5rem)]">
            <div className="align-self-center  justify-content-center px-0 py-2  h-[4.5rem]">
              {/* <FiltersHeader
            filters={filters}
            windowHeight={windowHeight}
            dispatch={dispatch}
            page={page}
            cardsPerPage={cardsPerPage}
          />
          <FiltersRow
            filters={filters}
            dispatch={dispatch}
            timeZone={timeZone}
            locale={locale}
          /> */}
            </div>
            <div className="overflow-y-scroll h-[calc(100%-4.5rem)] mx-auto">
              {/* <CustomAccordionItem
            icon={<MdInfoOutline size={20} />}
            name="Subjects"
            categories={subjects}
            itemPalette={subjectPalette}
          />
          <CustomAccordionItem
            name="Activities"
            categories={activities}
            itemPalette={activityPalette}
            icon={<MdOutlineLightbulb size={20} className="mr-1" />}
          />
          <CustomAccordionItem
            name={"Deadline"}
            icon={<MdCalendarToday size={20} className="mr-1" />}
            categories={""}
            itemPalette={""}
          />

          <CustomAccordionItem
            name={"Completed"}
            icon={<BsCheckLg size={20} className="mr-1" />}
            categories={""}
            itemPalette={""}
          /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default ProfileCard;
