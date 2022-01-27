import { useEffect, useRef } from "react";
import SeenIcon from "../../assets/svg/View";
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { ResponsiveLine } from "@nivo/line";

export default () => {
  const height = 600;
  const gradProps = {
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: height,
    y2: "0",
  };
  const data = [
    {
      id: "japan",
      data: [
        {
          x: "فروردین",
          y: 279,
        },
        {
          x: "اردیبهشت",
          y: 10,
        },
        {
          x: "خرداد",
          y: 39,
        },
        {
          x: "تیر",
          y: 108,
        },
        {
          x: "مرداد",
          y: 46,
        },
        {
          x: "شهریور",
          y: 78,
        },
        {
          x: "مهر",
          y: 23,
        },
        {
          x: "آبان",
          y: 44,
        },
        {
          x: "آذر",
          y: 47,
        },
        {
          x: "دی",
          y: 86,
        },
        {
          x: "بهمن",
          y: 55,
        },
        {
          x: "اسفند",
          y: 229,
        },
      ],
    },
  ];

  return (
    <div className="absolute w-[770px] h-[380px] bg-[#f5f5f5] rounded-[10px] top-16 right-0">
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
        lineWidth={3}
        axisBottom={{
          tickSize: 0,
          tickPadding: 20,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 30,
          tickRotation: 0,
          legend: "",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        colors={["url(#someGradientId)"]}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={"#f5f5f500"}
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
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
