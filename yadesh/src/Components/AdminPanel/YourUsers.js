import UserUserIcon from "../../assets/svg/AdminLogin/UserUserIcon";
import chartbg1 from "../../assets/Img/chartbg1.png";
import { ResponsiveLine } from "@nivo/line";

export default () => {
  const gradProps = {
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "450",
    y2: "0",
  };
  const data = [
    {
      id: "japan",
      data: [
        {
          x: "فروردین",
          y: 0,
        },
        {
          x: "اردیبهشت",
          y: 50,
        },
        {
          x: "خرداد",
          y: 100,
        },
        {
          x: "تیر",
          y: 150,
        },
        {
          x: "مرداد",
          y: 700,
        },
        {
          x: "شهریور",
          y: 200,
        },
        {
          x: "مهر",
          y: 1000,
        },
        {
          x: "آبان",
          y: 800,
        },
        {
          x: "آذر",
          y: 1500,
        },
        {
          x: "دی",
          y: 1100,
        },
        {
          x: "بهمن",
          y: 600,
        },
        {
          x: "اسفند",
          y: 2000,
        },
      ],
    },
  ];

  return (
    <div className="absolute w-[770px] h-[380px] bg-[#f5f5f5] rounded-[10px] top-16 right-0">
      <img
        className="absolute mt-[28px] w-[386px] h-[304px] mr-[36px]"
        src={chartbg1}
      />
      <div className="mr-[-70px] mt-[10px] w-[550px] h-[400px]">
        <svg className="mt-[-180px]">
          <defs>
            <linearGradient id="someGradientId" {...gradProps}>
              <stop offset="10%" stopColor="#ecc113" />
              <stop offset="20%" stopColor="#7c9f84" />
              <stop offset="30%" stopColor="#5298c6" />
              <stop offset="40%" stopColor="#019cdf" />
              <stop offset="50%" stopColor="#00c8ae" />
              <stop offset="90%" stopColor="#01f988" />
              <stop offset="100%" stopColor="#16fe8e" />
            </linearGradient>
          </defs>
        </svg>
        <ResponsiveLine
          data={data}
          curve="natural"
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
          axisTop={null}
          axisRight={null}
          animate={true}
          enableGridX={false}
          enableGridY={false}
          lineWidth={3}
          axisBottom={{
            tickSize: 0,
            tickPadding: 20,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle",
            legendStyle: "bold",
          }}
          axisRight={{
            tickSize: 0,
            tickPadding: 30,
            tickRotation: 0,
            legend: "",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          axisLeft={null}
          colors={["url(#someGradientId)"]}
          pointSize={5}
          pointColor={{ theme: "background" }}
          pointBorderWidth={0}
          pointBorderColor={"#f5f5f5"}
          pointLabel="y"
          pointLabelYOffset={-1}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 0,
              itemHeight: 0,
              itemOpacity: 0,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    pointBorderWidth: 3,
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <div>
        <div className="w-[330px] mr-[440px] mt-[-225px] ">
          <div className="flex mt-5 justify-between">
            <div className="flex">
              <UserUserIcon color={"#000"} />
              <p className="mr-3 font-bold text-[13px]">کاربران شما</p>
            </div>
            <div className="ml-5 -mt-1">
              <select
                id="wodselect"
                className="bg-[#e1e4e5] text-[12px] outline-none h-[30px] w-[80px] rounded-[5px]"
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

          <div className="flex mt-10">
            <p className="text-[40px] ml-1.5 text-[#acb4b8] mt-[-30px]">.</p>
            <p className="text-[10.5px] font-bold ml-12 ">
              کاربران تازه ثبت نام شده
            </p>
            <p className="text-[10.5px] ml-[54px] font-bold ">2100 نفر</p>
            <p className="text-[10.5px] font-bold">14.5%+</p>
          </div>
          <div className="w-[310px] mt-2 h-[2px] rounded-full bg-[#acb4b870]"></div>
          <div className="flex mt-6 ">
            <p className="text-[40px] ml-1.5 text-[#acb4b8] mt-[-30px]">.</p>
            <p className="text-[10.5px] font-bold ml-[108px] ">کاربران فعال</p>
            <p className="text-[10.5px] ml-[53px] font-bold ">2100 نفر</p>
            <p className="text-[10.5px] font-bold">14.5%+</p>
          </div>
          <div className="w-[310px] mt-2 h-[2px] rounded-full bg-[#acb4b870]"></div>
          <div className="flex mt-6">
            <p className="text-[40px] ml-1.5 text-[#acb4b8] mt-[-30px]">.</p>
            <p className="text-[10.5px] font-bold ml-[90px] ">
              کاربران غیر فعال
            </p>
            <p className="text-[10.5px] ml-[54px] font-bold ">2100 نفر</p>
            <p className="text-[10.5px] font-bold">14.5%+</p>
          </div>
          <div className="w-[310px] mt-2 h-[2px] rounded-full bg-[#acb4b870]"></div>
          <div className="flex mt-6">
            <p className="text-[40px] ml-1.5 text-[#acb4b8] mt-[-30px]">.</p>
            <p className="text-[10.5px] font-bold ml-[117px] ">کل کاربران</p>
            <p className="text-[10.5px] mr-[85px] font-bold ">2100 نفر</p>
          </div>
        </div>
      </div>
    </div>
  );
};
