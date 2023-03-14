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

    subjectPalette,
    activityPalette,
    filters,

    dispatch,

    gameLevels,
  } = useContext(AppContext);

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  return (
    <>
      <div className="max-lg:hidden backdrop-blur-xl bg-blend-overlay bg-card rounded-2xl h-[calc(87vh+1rem)] w-[30vw] min-w-[350px] shadow-2xl relative top-8 flex flex-col ml-[5vw]">
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
      <div className="btm-nav h-16 bg-card">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </button>
        <button className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Warnings</span>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Statics</span>
        </button>
      </div>
    </>
  );
}
export default ProfileCard;
