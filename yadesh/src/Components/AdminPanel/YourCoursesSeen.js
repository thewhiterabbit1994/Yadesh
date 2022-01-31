import { ResponsivePie } from "@nivo/pie";
import CoursesIcon from "../../assets/svg/AdminLogin/CoursesIcon";

const YourCoursesSeen = ({ showYourCoursesSeen, showYourUsers }) => {
  const data = [
    {
      id: "اقتصاد آنلاین",
      label: "اقتصاد آنلاین",
      value: 14.5,
      color: "#ffe999",
    },
    {
      id: "مدیریت منابع مالی",
      label: "مدیریت منابع مالی",
      value: 19,
      color: "#ffdd66",
    },
    {
      id: "مدیریت منابع انسانی",
      label: "مدیریت منابع انسانی",
      value: 74,
      color: "#ffc700",
    },
    {
      id: "حسابداری صنعتی",
      label: "حسابداری صنعتی",
      value: 84,
      color: "#99ffce",
    },
    {
      id: "حسابدار صنعتی",
      label: "حسابدار صنعتی",
      value: 84,
      color: "#00ff85",
    },
    {
      id: "سرمایه گذاری در بورس",
      label: "سرمایه گذاری در بورس",
      value: 9,
      color: "#00b35d",
    },
    {
      id: "اقتصاد خرد",
      label: "اقتصاد خرد",
      value: 45,
      color: "#4da2ff",
    },
    {
      id: "اقتصادخرد",
      label: "اقتصادخرد",
      value: 45,
      color: "#0172ee",
    },
    {
      id: "اقتصاد کلان",
      label: "اقتصاد کلان",
      value: 5.5,
      color: "#0055b3",
    },
  ];
  return (
    <div
      className={`transform transition-opacity duration-500 scale-0  absolute w-[770px] h-[280px] bg-[#f5f5f5] rounded-[10px]  right-0 ${
        showYourCoursesSeen
          ? `${showYourUsers ? "top-[460px]" : "top-16"}  scale-100 opacity-100`
          : "opacity-0"
      }
      }`}
    >
      <div className="flex mt-5 justify-between">
        <div className="flex mr-5">
          <CoursesIcon color={"#000"} />
          <p className="mr-3 font-bold text-[13px]">بازدید دوره های شما</p>
        </div>
        <div className="ml-5 -mt-1">
          <select
            id="wodselect"
            className="bg-[#e1e4e5] text-[12px] relative z-10 outline-none h-[30px] w-[80px] rounded-[5px]"
          >
            <option id="oneyear" className="" value="oneyear">
              یک ساله
            </option>
            <option id="sixmonth" value="sixmonth">
              6 ماهه
            </option>
            <option id="threemonth" value="threemonth">
              3 ماهه
            </option>
            <option id="monthly" value="monthly">
              ماهیانه
            </option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="w-[350px] h-[280px] mt-[-10px] mr-[-75px]">
          <ResponsivePie
            data={data}
            colors={{ datum: "data.color" }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0}
            padAngle={0}
            animate={true}
            cornerRadius={0}
            activeOuterRadiusOffset={8}
            borderWidth={0}
            arcLabel={null}
            arcLinkLabel={null}
            arcLinkLabelsSkipAngle={0}
            arcLinkLabelsTextColor="#000"
            arcLinkLabelsThickness={0}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            legends={[
              {
                anchor: "bottom",
                direction: "column",
                justify: false,
                translateX: -200,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 0,
                itemHeight: 0,
                itemTextColor: "#000",
                itemDirection: "left-to-right",
                itemOpacity: 0,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-3 h-[120px] mt-16 mr-[-80px] w-[550px] font-bold">
          {data.map((item) => {
            return (
              <div className="flex">
                <div
                  style={{ background: `${item.color}` }}
                  className="h-3 w-3 rounded-sm ml-2 "
                ></div>
                <p className="text-[12px] pl-2 text-black">{item.id}</p>
                <p className="text-[12px] text-black">{item.value + "%"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default YourCoursesSeen;
