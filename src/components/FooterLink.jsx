import { serviceOpen } from "../store/store";
export const FooterLink = ({ linkTo, children, tabNum }) => {
  const handleClick = (e) => {
    e.preventDefault();
    serviceOpen.set(tabNum);
  };
  return (
    <a
      href={linkTo}
      className="text-normal nav-link cursor-pointer hover:font-semibold focus:border-[#533630] active:text-[#D9C6AF]"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
