import React, { useEffect, useRef, useState } from "react";
import arrow from "../../assets/demand.webp";
import * as echarts from "echarts";

const WhyJavaTraining = ({ title, headerTitle }) => {
    console.log("🚀 ~ WhyJavaTraining ~ headerTitle:", headerTitle)

    const data = [
        {
            id: 1,
            title: "Java Administrator",
            avgPackage: "₹ 8 LPA",
            avgHike: "44 %",
            techTransitions: "3000 +",
            demand: "87%",
            demandText: "Managers said hiring Java Training was top priority",
            chartData: [
                { label: "Min (8L)", value: 13 },
                { label: "Min (10L)", value: 15 },
                { label: "Avg (16L)", value: 23 },
                { label: "Max (20L)", value: 16 },
                { label: "Max (30L)", value: 13 },
            ],
        },
        {
            id: 2,
            title: "Java Developer",
            avgPackage: "₹ 9 LPA",
            avgHike: "46 %",
            techTransitions: "4000 +",
            demand: "87%",
            demandText: "Managers said hiring Java Training was top priority",
            chartData: [
                { label: "Min (8L)", value: 13 },
                { label: "Min (10L)", value: 15 },
                { label: "Avg (16L)", value: 23 },
                { label: "Max (20L)", value: 16 },
                { label: "Max (30L)", value: 13 },
            ],
        },
        {
            id: 3,
            title: "Java Architect",
            avgPackage: "₹ 10 LPA",
            avgHike: "48 %",
            techTransitions: "2000 +",
            demand: "80%",
            demandText: "Managers said hiring Java Training was top priority",
            chartData: [
                { label: "Min (8L)", value: 13 },
                { label: "Min (10L)", value: 15 },
                { label: "Avg (16L)", value: 23 },
                { label: "Max (20L)", value: 16 },
                { label: "Max (30L)", value: 13 },
            ],
        },
        {
            id: 4,
            title: "Business Analyst",
            avgPackage: "₹ 9 LPA",
            avgHike: "48 %",
            techTransitions: "3000 +",
            demand: "83%",
            demandText: "Managers said hiring Java Training was top priority",
            chartData: [
                { label: "Min (8L)", value: 13 },
                { label: "Min (10L)", value: 15 },
                { label: "Avg (16L)", value: 23 },
                { label: "Max (20L)", value: 16 },
                { label: "Max (30L)", value: 13 },
            ],
        },
        {
            id: 5,
            title: "Java Consultant",
            avgPackage: "₹ 8 LPA",
            avgHike: "44 %",
            techTransitions: "3000 +",
            demand: "87%",
            demandText: "Managers said hiring Java Training was top priority",
            chartData: [
                { label: "Min (8L)", value: 13 },
                { label: "Min (10L)", value: 15 },
                { label: "Avg (16L)", value: 23 },
                { label: "Max (20L)", value: 16 },
                { label: "Max (30L)", value: 13 },
            ],
        },
        {
            id: 6,
            title: "Java Consultant",
            avgPackage: "₹ 8 LPA",
            avgHike: "44 %",
            techTransitions: "3000 +",
            demand: "87%",
            demandText: "Managers said hiring Java Training was top priority",
            chartData: [
                { label: "Min (8L)", value: 13 },
                { label: "Min (10L)", value: 15 },
                { label: "Avg (16L)", value: 23 },
                { label: "Max (20L)", value: 16 },
                { label: "Max (30L)", value: 13 },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(data[0]); // Default to the first tab
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);

            // Configure chart options
            chart.setOption({
                xAxis: {
                    type: "category",
                    data: activeTab?.chartData?.map((item) => item.label),
                },
                yAxis: {
                    type: "value",
                    min: 0,
                    max: 25,
                },
                series: [
                    {
                        type: "bar",
                        data: activeTab?.chartData?.map((item, index) => ({
                            value: item.value,
                            itemStyle: {
                                color: index === 2 ? "#2953B4" : "#D4DDF0", // Highlight Avg with blue
                            },
                        })),
                        barWidth: "60%",
                    },
                ],
                tooltip: {
                    trigger: "item",
                    formatter: (params) => `${params.name}: ${params.value} L`,
                },
            });

            return () => {
                chart.dispose();
            };
        }
    }, [activeTab]);

    return (
        <div className="container mx-auto font-poppins mt-20 px-2">
            <p className="text-xl md:text-3xl font-semibold text-[#343433] text-center mb-10">
                {title}
            </p>
            <div className="flex-row md:flex items-center mx-auto w-fit md:w-full justify-center md:justify-between md:border-b border-[#DDDDDD] mb-12">
                {headerTitle?.map((item, index) => (
                    <p
                        key={index + 1}
                        onClick={() => setActiveTab(data?.find((d) => d?.id === index + 1))}
                        className={`cursor-pointer w-fit text-center pb-4 ${activeTab?.id === index + 1
                            ? "text-[#1554BB] font-semibold border-b-2 border-[#1554BB] "
                            : "text-gray-600"
                            }`}
                    >
                        {item}
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div
                    className="bg-white text-center border border-[#d6dcee] px-6 pt-16 pb-10 rounded-xl"
                    style={{ boxShadow: "0 0 30px #adb5ca57" }}
                >
                    <p className="text-[#1554BB] text-[40px] font-semibold leading-7">
                        {activeTab?.avgPackage}
                    </p>
                    <p className="text-gray-700 leading-7">Avg package</p>
                    <p className="mt-10 text-4xl text-[#1554BB] font-semibold leading-7">
                        {activeTab?.avgHike}
                    </p>
                    <p className="text-gray-700 leading-7">Avg hike</p>
                    <p className="mt-10 text-4xl text-[#1554BB] font-semibold leading-7">
                        {activeTab?.techTransitions}
                    </p>
                    <p className="text-gray-700">Tech transitions</p>
                </div>

                <div
                    className="bg-white  rounded-lg border border-[#d6dcee] col-span-1 md:col-span-2"
                    style={{ boxShadow: "0 0 30px #adb5ca57" }}
                >
                    <p className="text-gray-800 font-medium px-6 pt-6  text-xl">
                        Annual Average Salaries
                    </p>
                    <div ref={chartRef} className="h-[295px] w-full"></div>
                </div>

                <div
                    className="bg-white p-6 rounded-lg border border-[#d6dcee] "
                    style={{ boxShadow: "0 0 30px #adb5ca57" }}
                >
                    <p className="text-gray-800 font-medium mb-4 text-xl">Demand</p>
                    <img src={arrow} alt="arrow" loading="lazy" />
                    <div className="flex items-center">
                        <div>
                            <p className="text-[#1554BB] mt-4 text-4xl font-bold">
                                {activeTab?.demand}
                            </p>
                            <p className="text-gray-700 mt-5 w-[70%]">{activeTab?.demandText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyJavaTraining;
