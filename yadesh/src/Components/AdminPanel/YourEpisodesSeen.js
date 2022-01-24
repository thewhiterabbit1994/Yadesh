import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import { useEffect, useRef } from "react";
import SeenIcon from "../../assets/svg/View";
import { selectOptions } from "@testing-library/user-event/dist/select-options";

export default () => {
  useEffect(() => {
    let root = am5.Root.new("chart2div");
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
      })
    );

    root.setThemes([am5themes_Animated.new(root)]);
    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 0 });
    xRenderer.labels.template.setAll({
      fontSize: "10px",
      paddingRight: -35,
    });

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.labels.template.setAll({
      fontSize: "0px",
    });

    let data = [
      {
        country: "شنبه",
        value: 2025,
      },
      {
        country: "یکشنبه",
        value: 1882,
      },
      {
        country: "دوشنبه",
        value: 1809,
      },
      {
        country: "سه شنبه",
        value: 1322,
      },
      {
        country: "چهارشنبه",
        value: 1122,
      },
      {
        country: "پنجشنبه",
        value: 1114,
      },
      {
        country: "جمعه",
        value: 984,
      },
    ];
    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 100,
      cornerRadiusTR: 100,
    });
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.data.setAll(data);
    xAxis.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="absolute w-[350px] h-[380px] bg-[#f5f5f5] rounded-[10px] top-16 left-0">
      <div>
        <div className="flex mt-5 justify-between">
          <div className="flex mr-5">
            <SeenIcon color={"#000"} />
            <p className="mr-3 font-bold text-[13px]">بازدید اپیزود های شما</p>
          </div>
          <div className="ml-5">
            <select
              id="wodselect"
              className="bg-[#e1e4e5] text-[12px] outline-none h-[30px] w-[80px] rounded-[5px]"
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
      <div id="chart2div" className="w-[350px] h-[320px] "></div>
    </div>
  );
};
