import PDF from "../../assets/svg/AdminLogin/PDf";
import Excel from "../../assets/svg/AdminLogin/Excel";
import PowerPoint from "../../assets/svg/AdminLogin/PowerPoint";

export default ({ setexportChartModal, exportChartModal }) => (
  <div
    className={`absolute left-[58px] top-[40px] drop-shadow-xl transform transition-opacity duration-500 scale-0 z-20 w-[140px] h-[190px]  rounded-[10px] bg-[#f5f5f5]  ${
      exportChartModal ? "scale-100 opacity-100" : "opacity-0 "
    }`}
  >
    <div className="flex justify-between divide-y-reverse divide-y m-auto ">
      <div className="flex w-full justify-between">
        <p className="text-[12px] p-5 font-bold">PDF</p>
        <div className="p-4">
          <PDF />
        </div>
      </div>
    </div>
    <div className="flex justify-between divide-y-reverse divide-y m-auto ">
      <div className="flex w-full justify-between">
        <p className="text-[12px] p-5 font-bold">Excel</p>
        <div className="pt-4 pl-5">
          <Excel />
        </div>
      </div>
    </div>
    <div className="flex justify-between divide-y-reverse divide-y m-auto ">
      <div className="flex w-full justify-between">
        <p className="text-[12px] pt-6 pr-5 font-bold">PowerPoint</p>
        <div className="pl-5 pt-5">
          <PowerPoint />
        </div>
      </div>
    </div>
    {/* // Create */}
  </div>
);
