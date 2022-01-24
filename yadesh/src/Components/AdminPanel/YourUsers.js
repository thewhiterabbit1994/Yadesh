import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import { useEffect, useRef } from "react";
import SeenIcon from "../../assets/svg/View";
import { selectOptions } from "@testing-library/user-event/dist/select-options";

export default () => {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout,
        maxTooltipDistance: 0,
      })
    );

    let data = [
      {
        date: new Date(2021, 0, 1).getTime(),
        value: 1,
        value2: 2.5,
      },
      {
        date: new Date(2021, 0, 2).getTime(),
        value: 3,
        value2: 2.1,
      },
      {
        date: new Date(2021, 0, 3).getTime(),
        value: 2,
        value2: 3,
      },
      {
        date: new Date(2021, 0, 4).getTime(),
        value: 1,
        value2: 2,
      },
      {
        date: new Date(2021, 0, 5).getTime(),
        value: 1.5,
        value2: 0.5,
      },
    ];

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
        }),
      })
    );

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomXY",
        xAxis: xAxis,
      })
    );

    xAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    yAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    function createSeries(name, field) {
      let series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {}),
          stroke: am5.color("#257b32"),
        })
      );

      series.strokes.template.set("strokeWidth", 4);

      series
        .get("tooltip")
        .label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}");
      series.data.setAll(data);
    }
    createSeries("Series #1", "value");

    chart.appear(1000, 100);
  }, []);
  return (
    <div className="absolute w-[770px] h-[380px] bg-[#f5f5f5] rounded-[10px] top-16 right-0">
      <div></div>
      <div id="chartdiv" className="w-[350px] h-[370px] "></div>
    </div>
  );
};
