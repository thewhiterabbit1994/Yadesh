import { useEffect, useRef } from "react";
import SeenIcon from "../../assets/svg/View";
import { ResponsiveBar } from "@nivo/bar";
import chartbg from "../../assets/Img/chartbg.png";

export default ({ showYourEpisodesSeen }) => {
  const data = [
    {
      weekday: "شنبه",
      episodeSeen: 70,
      episodeSeenColor: "#ffc700",
    },
    {
      weekday: "یک شنبه",
      episodeSeen: 40,
      episodeSeenColor: "#00ff85",
    },
    {
      weekday: "دوشنبه",
      episodeSeen: 90,
      episodeSeenColor: "#0055b3",
    },
    {
      weekday: "سه شنبه",
      episodeSeen: 20,
      episodeSeenColor: "#ffc700",
    },
    {
      weekday: "چهارشنبه",
      episodeSeen: 60,
      episodeSeenColor: "#00b35d",
    },
    {
      weekday: "پنجشنبه",
      episodeSeen: 70,
      episodeSeenColor: "#0172ee",
    },
    {
      weekday: "جمعه",
      episodeSeen: 30,
      episodeSeenColor: "#ffc700",
    },
  ];
  return (
    <div
      className={`transform transition-opacity duration-500 scale-0 absolute w-[330px] h-[380px] bg-[#f5f5f5] rounded-[10px] top-16 left-0 ${
        showYourEpisodesSeen ? "scale-100 opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <div className="flex mt-5 justify-between">
          <div className="flex mr-5">
            <SeenIcon color={"#000"} />
            <p className="mr-3 font-bold text-[13px]">بازدید اپیزود های شما</p>
          </div>
          <div className="ml-5">
            <select
              id="wodselect"
              className="bg-[#e1e4e5] text-[12px] relative z-10 outline-none h-[30px] w-[80px] rounded-[5px]"
            >
              <option id="thisweek" className="" value="thisweek">
                این هفته
              </option>
              <option id="today" value="today">
                امروز
              </option>
            </select>
          </div>
        </div>
      </div>
      <img className="absolute  mt-8 mr-[20px]" src={chartbg} />
      <div className="w-[330px] mt-[-20px] mr-[-3px] h-[350px]">
        <ResponsiveBar
          data={data}
          keys={["episodeSeen"]}
          indexBy="weekday"
          margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
          padding={0.6}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={({ id, data }) => String(data[`${id}Color`])}
          borderRadius={10}
          enableGridX={false}
          enableGridY={false}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,

            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={null}
          label={false}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 0,
              itemWidth: 0,
              itemHeight: 0,
              itemDirection: "left-to-right",
              itemOpacity: 0,
              symbolSize: 0,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 0,
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <div className="w-[330px] h-[10px] relative bottom-[58px] bg-[#f5f5f5] "></div>
    </div>
  );
};
